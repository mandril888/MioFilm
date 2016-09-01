var express		= require('express');
var apiRoutes	= express.Router();
var User		= require('./../models/user'); // get our mongoose model

var authentication = require('./../functions/authentication') // get the function to authenticate the users
var showJsonUsers = require('./../functions/showJsonUsers') // get the function to show users registered
var verifyToken	= require('./../middlewares/verifyToken') // get the functoin to verify the token

// route to authenticate a user (POST http://localhost:8085/api/authenticate)
apiRoutes.post('/authenticate', authentication.bind(null, User));

// route to return all users (GET http://localhost:8085/api/users)
apiRoutes.get('/users', showJsonUsers);

// route middleware to verify a token
apiRoutes.use(verifyToken);

module.exports = apiRoutes;