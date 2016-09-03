var User = require('./../models/user');

function infoUser (req, res) {
	console.log(req.body)
	User.findOne({
		name: req.body.nameUser
	}, function(err, user) {
		console.log('paso3 '+user)
		if(user) {
			console.log(user.filmsWatched)
			res.json(user.filmsWatched);
		}
	})
}

module.exports = infoUser;