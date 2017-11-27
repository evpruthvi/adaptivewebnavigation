var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
//create a schema for database storage
var UserSchema = mongoose.Schema({
	username:{
		type:String,
		index: true
	},
	password:{type:String},
	email:{type:String},
	name:{type:String},
	history: [String],
	log1:[String],
	log2:[String],
	log3:[String],
	log4:[String],
	log5:[String]
	});

//add date schema

var User = module.exports = mongoose.model('User', UserSchema);


module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}