var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressLayouts = require('express-ejs-layouts');

// importing Mongodb database schema
var models = require('../models/user');
let currentUser;

// register ejs template page
router.get('/register', function(req,res){
	res.render('register.ejs');
});
 
// login ejs template page
router.get('/login', function(req,res){
  res.render('login.ejs');
});

router.post('/interactionsLastMonth', function(req, res, next) {
      var output = [];
      var dayCounts = [];
      var days = [];
      var dateIndexDict = {};
      for(var i = 0 ; i < 31 ; i++){
        var d = new Date();
        d.setDate(d.getDate() - i);
        dateIndexDict[d.getMonth()+"-"+d.getDate()+"-"+d.getFullYear()] = i;
        dayCounts.push(0);
        days.push(d.getMonth()+"-"+d.getDate()+"-"+d.getFullYear());
        //dayCounts.push(0);
      }
  models.Log.find({}, function (err, docs) {
    for(var i = 0; i < docs.length ; i++ ){
      var c = new Date(docs[i].timestamp);
      //     console.log(c);
      var formattedDate = c.getMonth()+"-"+c.getDate()+"-"+c.getFullYear();
      var b = new Date();
      b.setDate(b.getDate() - 31);
      if(c > b){
        var index = dateIndexDict[formattedDate];
        dayCounts[index] = dayCounts[index] + 1;
      }
    }
    dayCounts.push(currentUser);
    days.push('x');
    output.push(dayCounts.reverse());
    output.push(days.reverse());
    res.send(output);
  });
});


router.get('/getmetricsdata', function(req,res){
  models.Log.find({}, function (err, docs) {
    var curUser = currentUser;
    var allUserDict = {};
    var curUserDict = {};
    for (var i = 0; i < docs.length; i++) {
      var tags = docs[i].tags;
      if (tags != null) {
        var tagList = tags.split(" ");
        for (var j = 0; j < tagList.length; j++) {
          if (allUserDict[tagList[j]] != undefined) {
            if (curUser != undefined) {
              curUserDict[tagList[j]] = curUserDict[tagList[j]] + 1;
            }
            allUserDict[tagList[j]] = allUserDict[tagList[j]] + 1;
          } else {
            if (curUser != undefined) {
              curUserDict[tagList[j]] = 1;
            }
            allUserDict[tagList[j]] = 1;
          }
        }
      }
    }

    var allUserArray = [];
    var curUserArray = [];
    for (var key in allUserDict) {
      var temp = {text: key, weight: allUserDict[key]};
      allUserArray.push(temp)
    }
    for (var key in curUserDict) {
      var temp = {text: key, weight: curUserDict[key]};
      curUserArray.push(temp)
    }
    console.log("Cur User:" + curUser);
    console.log("Cur User Array:" + curUserArray);
    console.log("All User:" + allUserArray);
    res.send([allUserArray, curUserArray]);
  });
});

router.get('/metrics',function (req,res) {
      res.render('metrics.ejs');
});


router.get('/api', function(req,res) {
  models.UserModel.find({username: "aaa"}, function (err, docs) {
      var interests = [];
      for (var i = 0; i < docs.length; i++) {
        interests.push(docs[i].userModel);
      }
      res.send(interests);
    }
  );
});

// register
router.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
	var interests = req.body.interest;
	//Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is Not valid').isEmail();

	req.checkBody('username', 'username required').notEmpty();	
	req.checkBody('password', 'password is required').notEmpty();
	req.checkBody('password2', 'passwords do not match').equals(req.body.password);	

	var errors = req.validationErrors();
	if(errors){
		res.render('register.ejs',{errors:errors});
	}
	else{

	  //Create a row for the user in login table
		var newUser = new models.User({
			name: name,
			email:email,
			username: username,
			password: password,
		})
    models.createUser(newUser, function(err, user){
			if(err) throw err;
		});

		/*
		 Create a new row for the user model in usermodel table.
		 This will be dynamically updated depending on the interaction logs.
		 Is yet to be implemented.
		   */

    var newUserModel = new models.UserModel({
      username: username,
      userModel : interests
    }).save(function(err,newUserModel){
      if(err) throw err;
    });
		req.flash('success_msg', 'You are registered and can now login');
		res.redirect('login');	
	}
});

// login authenticate
passport.use(new LocalStrategy(
  function(username, password, done) {
   models.getUserByUsername(username, function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Unknown User'});
   	}

   	models.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
        currentUser = user.username;
  		  var date = new Date();

  		  // Store the logged user login time in history table.
        var newHistory = new models.History({
          username: user.username,
          loginStamp: date
        }).save(function(err,newHistory){
            if(err) throw err;
          });

        return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  models.getUserById(id, function(err, user) {
    done(err, user);
  });
});




router.post('/votes', function(req, res){
  var user = currentUser;
  if (user == null) {
    console.log("No user logged in!");
    return;
  }

  var newLog = new models.Log({
    user: currentUser,
    action: req.body.action,
    tags: req.body.tags,
    url: req.body.url,
    content: req.body.content,
    timestamp: new Date()
  }).save(function(err,newLog){
    if(err) throw err;
  });

//  console.log(req.body);
});



// login post endpoint
router.post('/login',
  passport.authenticate('local', { failureRedirect:'login',failureFlash: true}),
  function(req, res) {
    //Set the cookie for current userName
    res.cookie("userid",currentUser,{httpOnly:false});
    res.redirect('/default');
});

// logout 
router.get('/logout', function(req,res){
	req.logout();
	res.clearCookie('userid');
	req.flash('success_msg', 'You are now logged out');
	res.redirect('login');
})

module.exports = router;
