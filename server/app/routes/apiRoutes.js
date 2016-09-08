var express			= require('express');
var apiRoutes		= express.Router();
var User			= require('./../models/user');

var authentication	= require('./../functions/authentication')
var verifyToken		= require('./../middlewares/verifyToken')
var deleteFilm		= require('./../functions/deleteFilm')
var infoFilmSeen	= require('./../functions/infoFilmSeen')
var infoUser		= require('./../functions/infoUser')
var deleteFilmToSee	= require('./../functions/deleteFilmToSee')
var infoFilmToSee= require('./../functions/infoFilmToSee')
var infoUserToSee	= require('./../functions/infoUserToSee')


apiRoutes.post('/authenticate', authentication.bind(null, User));
apiRoutes.post('/film-seen', infoFilmSeen);
apiRoutes.post('/info-user', infoUser);
apiRoutes.post('/delete-film', deleteFilm);
apiRoutes.post('/film-toSee', infoFilmToSee);
apiRoutes.post('/info-user-toSee', infoUserToSee);
apiRoutes.post('/delete-film-toSee', deleteFilmToSee);

// route middleware to verify a token
apiRoutes.use(verifyToken);

module.exports = apiRoutes;