var User = require('./../models/user');

function infoFilmSeen (req, res) {

	User.findOne({
		name: req.body.nameUser
	}, function(err, user) {
		console.log(user)
		if(user) {

			var filmExist;
			console.log('length: '+user.filmsWatched.length)

			if(user.filmsWatched.length) {
				console.log('----length !== 0')
				filmExist = user.filmsWatched.some(function(item){
					return item.idFilm === req.body.idFilm;
				})
			} else {
				console.log('----length === 0')
				filmExist = false;
			}

			console.log('USER*************************************'+user)

			var updateInfoFilmsUser = {
				idFilm: req.body.idFilm,
				rate: req.body.rate,
				mood: req.body.mood
			}

			if(!filmExist){
				console.log('enter in filmExists false')
				user.filmsWatched.push(updateInfoFilmsUser)
				// user.save(...)
				console.log('user: '+user)
				var query = {name: req.body.nameUser};
				var update = { $set: { filmsWatched: user.filmsWatched }}
				User.update(query, update, {upsert:true}, function(err, doc){
					if (err) return res.send(500, { error: err });
					return res.send("succesfully saved");
				});
			} else if (filmExist) {
				console.log('enter in filmExists ture')
				// user.filmsWatched.push(updateInfoFilmsUser)
				console.log('user: '+user)
				var query = {
					name: req.body.nameUser,
					'filmsWatched.idFilm': req.body.idFilm
				};
				var update = { $set: {
					'filmsWatched.$.idFilm': req.body.idFilm,
					'filmsWatched.$.rate': req.body.rate,
					'filmsWatched.$.mood': req.body.mood
				}}
				User.findOneAndUpdate(query, update, {upsert:true}, function(err, doc){
					if (err) return res.send(500, { error: err });
					console.log('ALL OK +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
					return res.send("succesfully saved");
				});
			}
		}
	})
}

module.exports = infoFilmSeen;