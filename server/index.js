// get the packages we need ============
var express		= require('express');
var app			= express();
var bodyParser	= require('body-parser');
var morgan		= require('morgan');
var mongoose	= require('mongoose');

var config		= require('./app/config'); // get our config file
var apiRoutes = require('./app/routes/apiRoutes');
var createUser = require('./app/functions/createUser') // get the function to show users registered
var infoFilmSeen = require('./app/functions/infoFilmSeen')
var User		= require('./app/models/user'); // get our mongoose model

// configuration =========
var port = process.env.PORT || 8085; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

app.use(express.static( __dirname + '/../client'));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));
// FINISH configuration =========

// routes ================
app.post('/new-user', createUser);
app.post('/film-seen', infoFilmSeen);


// API ROUTES
// get an instance of the router for api routes
// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// start the server ======
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
