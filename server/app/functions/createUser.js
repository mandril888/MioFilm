var express	= require('express');
var app		= express();
var jwt		= require('jsonwebtoken');
var config	= require('./../config');
var User	= require('./../models/user');

app.set('superSecret', config.secret);

function createUser (req, res) {
	console.log('in the server side')
	User.findOne({
		name: req.body.userName
	}, function(err, user) {
		console.log('in the function')
		if (err) throw err;
		if (!user) {
			console.log('createing user')
			// create a sample user
			var newUser = new User({
				name: req.body.userName,
				password: req.body.userPassword,
				admin: false,
				filmsWatched: [],
				filmsToSee: []
			});
			console.log('AAAA')
			var token = jwt.sign(newUser, app.get('superSecret'), {
				expiresIn: 300 // expires in 5 hours
			});
			console.log('BBBB')
			newUser.save(function(err) {
				console.log('saveing')
				if (err) throw err;

				console.log('User saved successfully');
				res.json({ success: true, token: token });
				});
		} else {
			res.json({ success: false, message: 'User exists.'});
		}
	})
}

module.exports = createUser;