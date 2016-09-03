var express			= require('express');
var apiRoutes		= express.Router();
var User			= require('./../models/user');

var authentication	= require('./../functions/authentication')
var verifyToken		= require('./../middlewares/verifyToken')
var infoFilmSeen	= require('./../functions/infoFilmSeen')
var infoUser		= require('./../functions/infoUser')


apiRoutes.post('/authenticate', authentication.bind(null, User));
apiRoutes.post('/film-seen', infoFilmSeen);
apiRoutes.post('/info-user', infoUser);

// route middleware to verify a token
apiRoutes.use(verifyToken);

module.exports = apiRoutes;