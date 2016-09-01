var express	= require('express');
var app		= express();
var jwt		= require('jsonwebtoken'); // used to create, sign, and verify tokens
var config	= require('./../config'); // get our config file MODELO
app.set('superSecret', config.secret); // secret variable

function authentication ( User, req, res) {
	// find the user
	User.findOne({
		name: req.body.userName,
		password: req.body.userPassword
	}, function(err, user) {

		console.log('data findOne' + user)
		if (err) throw err;

		if (user === null) {
			console.log('authentication ' + user)
			res.json({ success: false, message: 'Authentication failed.'});
		} else {
			console.log('all OK ' + user)
			// if user is found and password is right create a token
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