var User = require('./../models/user'); // get our mongoose model

function infoUser (req, res) {
	console.log(req.body)
	// User.findOne({
	// 	name: req.body.idNameUser
	// }, function(err, user) {
	// 	// console.log('paso3 '+user)
	// 	// if(user !== null) {
	// 	// 	console.log(user.filmsWatched)
	// 	// 	res.json(user.filmsWatched);
	// 	// }
	// })


}

module.exports = infoUser;