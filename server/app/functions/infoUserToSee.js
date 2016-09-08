var User = require('./../models/user');

function infoUserToSee (req, res) {
	console.log(req.body)
	User.findOne({
		name: req.body.nameUser
	}, function(err, user) {
		console.log('paso3 '+user)
		if(user) {
			console.log(user.filmsToSee)
			res.json(user.filmsToSee);
		}
	})
}

module.exports = infoUserToSee;