var express		= require('express');
var app			= express();
var User		= require('./../models/user'); // get our mongoose model


app.get('/setup', function(req, res) {

	// create a sample user
	var nick = new User({
		name: 'prueba1',
		password: 'prueba1',
		admin: true,
		filmsWatched: ['hello', 'no']
	});

	// save the sample user
	nick.save(function(err) {
		if (err) throw err;

		console.log('User saved successfully');
		res.json({ success: true });
		});
	});

module.exports = app;