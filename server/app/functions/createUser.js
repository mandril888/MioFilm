var User = require('./../models/user'); // get our mongoose model

function createUser (req, res) {

	User.findOne({
		name: req.body.userName
	}, function(err, user) {
		if (user === null) {
			// create a sample user
			var newUser = new User({
				name: req.body.userName,
				password: req.body.userPassword,
				filmsWatched: [],
				filmsToSee: []
			});

			// save the sample user
			newUser.save(function(err) {
				if (err) throw err;

				console.log('User saved successfully');
				res.json({ success: true });
				});
		} else {
			res.json({ success: false, message: 'User exists.'});
		}
	})
}

module.exports = createUser;