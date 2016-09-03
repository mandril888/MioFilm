var express	= require('express');
var app		= express();
var jwt		= require('jsonwebtoken');
var config	= require('./../config');

app.set('superSecret', config.secret);

function authentication ( User, req, res) {

	User.findOne({
		name: req.body.userName,
		password: req.body.userPassword
	}, function(err, user) {

		console.log('data findOne' + user)
		if (err) throw err;

		if (!user) {
			console.log('authentication ' + user)
			res.json({ success: false, message: 'Authentication failed.'});
		} else {
			console.log('all OK ' + user)
			var token = jwt.sign(user, app.get('superSecret'), {
				expiresIn: 300 // expires in 5 hours
			});

			res.json({
				success: true,
				message: 'Enjoy your token!',
				token: token
			});
		}
	});
}

module.exports = authentication;