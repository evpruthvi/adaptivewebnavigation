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

// register user
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
  passport.authenticate('local', {successRedirect:'/default', failureRedirect:'login',failureFlash: true}),
  function(req, res) {
    res.redirect('/');
});

// logout 
router.get('/logout', function(req,res){
	req.logout();
	req.flash('success_msg', 'You are now logged out');
	res.redirect('login');
})

// user activity collection endpoint
router.post('/jspost', function(req, res){
  	var user = currentUser;
  	if (user == null) {
  		console.log("No user logged in!");
  		return;
  	}
  	var value = req.body.data
  	var moment = require('moment');
	var stamp = moment().format('MMMM Do YYYY, h:mm:ss a');
	console.log(value + " at " + stamp);
	switch(value){
	    case "Scroll Up": user.log1.addToSet(value+" at "+stamp);
		    user.save(function(err) {if(err) throw err;});
			break;
		case "Scroll Down": user.log1.addToSet(value+" at "+stamp);
		    user.save(function(err) {if(err) throw err;});
			break;
	    case "Mouse Up": user.log2.addToSet(value+" at "+stamp);
		    user.save(function(err) {if(err) throw err;});
			break;
		case "Mouse Down": user.log2.addToSet(value+" at "+stamp);
		    user.save(function(err) {if(err) throw err;});
			break;
		case "Button Click": user.log3.addToSet(value+" at "+stamp);
		    user.save(function(err) {if(err) throw err;});
			break;
		case "Link Click": user.log4.addToSet(value+" at "+stamp);
		    user.save(function(err) {if(err) throw err;});
			break;
		case "Text Select": user.log5.addToSet(value+" at "+stamp);
		    user.save(function(err) {if(err) throw err;});
			break;
	}
});

module.exports = router;