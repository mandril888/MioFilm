// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
usersSchema = mongoose.model('users', new Schema({
	name: {type:String, trim:true},
	password: {type:String, trim:true},
	admin: Boolean,
	filmsWatched: Object,
	filmsToSee: Object
}));

module.exports = usersSchema;