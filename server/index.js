// get the packages we need ================================
var express			= require('express');
var app				= express();
var bodyParser		= require('body-parser');
var morgan			= require('morgan');
var mongoose		= require('mongoose');

// export files required ================================
var config			= require('./app/config');
var apiRoutes		= require('./app/routes/apiRoutes');
var createUser		= require('./app/functions/createUser')

// configuration ================================
var port = process.env.PORT || 8085;

// var MONGO_URL = config.database || process.env.MONGO_URL;
var MONGO_URL = process.env.MONGO_URL || config.database;

console.log(MONGO_URL)

mongoose.connect('mongodb://mandril888:Ruin$$08@ds019806.mlab.com:19806/miofilm');

app.use(express.static( __dirname + '/../client'));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// routes ================================
app.post('/new-user', createUser);

// api routes
// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// start the server ================================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
