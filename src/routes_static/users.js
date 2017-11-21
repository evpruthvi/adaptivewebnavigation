var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressLayouts = require('express-ejs-layouts');

// importing Mongodb database schema
var User = require('../models/user');
let currentUser;

// register ejs template page
router.get('/register', function(req,res){
	res.render('register.ejs');
});
 
// login ejs template page
router.get('/login', function(req,res){
   	res.render('login.ejs');
});

// register
router.post('/register', function(req, res){
	console.log(req.body);
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

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
		var newUser = new User({
			name: name,
			email:email,
			username: username,
			password: password,
		})
		User.createUser(newUser, function(err, user){
			if(err) throw err;
		});

		req.flash('success_msg', 'You are registered and can now login');
		res.redirect('login');	
	}
});

// login authenticate
passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
   	currentUser = user;
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Unknown User'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			user.history.addToSet(new Date());		
			user.save(function(err) {
			if(err) throw err;
			});
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
}));

// receiving data from extension
router.post('/rxdx', function(req, res){
    	//User.getUserByUsername(currentUser, function(err, user){
  	 	//	if(err) throw err;
  	 	var user=currentUser;
		var text = req.body.text.trim().split("|");
	    var key=text[0].trim();
  	    var value=text[1]
  	    console.log(key+":"+value);     
	    var stamp=req.body.stamp;
	    switch(key){
	    	case "up vote": user.log1.addToSet("up-voted answer on: "+value+" at "+stamp);		
	    					user.save(function(err) {if(err) throw err;});
							break;
		    case "down vote": user.log1.addToSet("down voted answer on: "+value+" at "+stamp);
		    				 user.save(function(err) {if(err) throw err;});
							break;
		    case "share": user.log2.addToSet("shared an answer on "+value+" at "+stamp);
							user.save(function(err) {if(err) throw err;});
							break;
			case "add a comment": user.log2.addToSet("commented on a answer on "+value+" at "+stamp);	
							user.save(function(err) {if(err) throw err;});
							break;
			case "Ask Question" : user.log4.addToSet("Asked at "+stamp);
							user.save(function(err) {if(err) throw err;});
							break;
			case "ask your own question" : user.log4.addToSet("Asked at "+stamp);
							user.save(function(err) {if(err) throw err;});
							break;
			case "Question clicked" :user.log5.addToSet(value+" at "+stamp);
							user.save(function(err) {if(err) throw err;});
							break;
			default : user.log3.addToSet(key+" at "+stamp);
							user.save(function(err) {if(err) throw err;});
							break;
		}
	});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// login post endpoint
router.post('/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'login',failureFlash: true}),
  function(req, res) {
    res.redirect('/');
});

// logout 
router.get('/logout', function(req,res){
	req.logout();
	req.flash('success_msg', 'You are now logged out');
	res.redirect('login');
})

module.exports = router;