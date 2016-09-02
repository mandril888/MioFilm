var User = require('./../models/user'); // get our mongoose model

function infoFilmSeen (req, res) {

	User.findOne({
		name: req.body.nameUser
	}, function(err, user) {
		console.log(user)
		if(user !== null) {
			console.log(req.body.idFilm)
			console.log(user.filmsWatched)
			user.filmsWatched.push(req.body.idFilm)
			console.log(user)
			var query = {name: req.body.nameUser};
			var update = { $set: { filmsWatched: user.filmsWatched }}
			User.update(query, update, {upsert:true}, function(err, doc){
				if (err) return res.send(500, { error: err });
				return res.send("succesfully saved");
			});
		}
	})
}

module.exports = infoFilmSeen;