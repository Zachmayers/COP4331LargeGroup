const mongoose = require('mongoose')
//creates a user schema for the database to follow
const userSchema = new mongoose.Schema({
	Username:{
		type:String,
		required:true
	},
	Password:{
		type:String,
		required:true
	},
	FirstName:{
		type:String
	},
	LastName:{
		type:String
	},
	Email:{
		type:String,
		required:true
	},
	temporarytoken: {
		type: String,
		required: true
	},
	active: {
		type: Boolean,
		required: true,
		default: false
	}
});

module.exports = mongoose.model('User', userSchema);
