// var User		= require('./app/models/user'); // get our mongoose model
var express		= require('express');
var app			= express();
var jwt			= require('jsonwebtoken'); // used to create, sign, and verify tokens

function authentication ( User, req, res) {
	// find the user
	User.findOne({
		name: req.body.userName,
		password: req.body.userPassword
	}, function(err, user) {

		console.log(user)
		if (err) throw err;

		if (user === null) {
			console.log('null')
			res.json({ success: false, message: 'Authentication failed.'});
		} else {
			console.log('all OK')
			// if user is found and password is right
			// create a token
			var token = jwt.sign(user, app.get('superSecret'), {
				expiresIn: 300 // expires in 5 hours
			});

			// return the information including token as JSON
			res.json({
				success: true,
				message: 'Enjoy your token!',
				token: token
			});
		}
	});
}

module.exports = authentication;