var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//create a schema for Login credentials
var UserSchema = mongoose.Schema({
	username:{
		type:String,
		index: true
	},
	password:{type:String},
	email:{type:String},
	name:{type:String},
	});

//create a schema for Login history of user
var HistorySchema = mongoose.Schema({
  username:{
    type:String,
    index: true
  },
  loginStamp:{type:String}
});

//create a schema for User Model of user
var UserModelSchema = mongoose.Schema({
  username:{
    type:String,
    index: true
  },
  userModel:[String]
});

//create a schema for Interaction Logs of user
var LogSchema = mongoose.Schema({
  user:{
    type:String,
    index: true
  },
  logtype:{type:String},
  url:{type:String},
  tags:{type:String},
  timestamp:{type:String},
  time :{type:String}
});

var History =  mongoose.model('history', HistorySchema);
var User = mongoose.model('user', UserSchema);
var Log = mongoose.model('log', LogSchema);
var UserModel = mongoose.model('userModel', UserModelSchema);


//Export all the schemas to be used in other files
module.exports ={
  User: User,
  History: History,
  Log: Log,
  UserModel: UserModel
};


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


