// get the packages we need ============
var express		= require('express');
var app			= express();
var bodyParser	= require('body-parser');
var morgan		= require('morgan');
var mongoose	= require('mongoose');
var jwt			= require('jsonwebtoken'); // used to create, sign, and verify tokens

var config		= require('./app/config'); // get our config file
var User		= require('./app/models/user'); // get our mongoose model
var verifyToken	= require('./app/middlewares/verifyToken') // get the functoin to verify the token
var authentication = require('./app/functions/authentication') // get the function to authenticate the users
var showJsonUsers = require('.app/functions/showJsonUsers') // get the function to show users registered

// configuration =========
var port = process.env.PORT || 8085; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));
// FINISH configuration =========

// routes ================
// basic route
app.get('/', function(req, res) {
	res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.get('/setup', function(req, res) {

	// create a sample user
	var nick = new User({
		name: 'no',
		password: 'no',
		admin: true,
		date: new Date()
	});

	// save the sample user
	nick.save(function(err) {
		if (err) throw err;

		console.log('User saved successfully');
		res.json({ success: true });
		});
	});

// API ROUTES
// get an instance of the router for api routes
var apiRoutes = express.Router();
// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// route to authenticate a user (POST http://localhost:8085/api/authenticate)
apiRoutes.post('/authenticate', authentication);

// route middleware to verify a token
apiRoutes.use(verifyToken);

// route to show a random message (GET http://localhost:8085/api/)
apiRoutes.get('/', function(req, res) {
	res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8085/api/users)
apiRoutes.get('/users', showJsonUsers);
// FINISH routes ================

// start the server ======
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
