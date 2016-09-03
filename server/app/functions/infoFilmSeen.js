var User = require('./../models/user');

function infoFilmSeen (req, res) {

	User.findOne({
		name: req.body.nameUser
	}, function(err, user) {
		console.log(user)
		if(user) {
			console.log('idFilm: '+req.body.idFilm)
			console.log('filmsWatched: '+user.filmsWatched)
			var filmExsist = user.filmsWatched.indexOf(req.body.idFilm);
			console.log('**********************************'+filmExsist)
			if(filmExsist===-1){
				user.filmsWatched.push(req.body.idFilm)
				console.log('user: '+user)
				var query = {name: req.body.nameUser};
				var update = { $set: { filmsWatched: user.filmsWatched }}
				User.update(query, update, {upsert:true}, function(err, doc){
					if (err) return res.send(500, { error: err });
					return res.send("succesfully saved");
				});
			}
		}
	})
}

module.exports = infoFilmSeen;