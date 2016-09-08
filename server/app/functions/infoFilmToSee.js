var User = require('./../models/user');

function infoFilmToSee (req, res) {

	User.findOne({
		name: req.body.nameUser
	}, function(err, user) {
		console.log(user)
		if(user) {

			var filmExist;
			console.log('length: '+user.filmsToSee.length)

			if(user.filmsToSee.length) {
				console.log('----length !== 0')
				filmExist = user.filmsToSee.some(function(item){
					return item.idFilm === req.body.idFilm;
				})
			} else {
				console.log('----length === 0')
				filmExist = false;
			}

			console.log('USER*************************************'+user)

			var updateInfoFilmsUser = {
				idFilm: req.body.idFilm
			}

			if(!filmExist){
				console.log('enter in filmExists false')
				user.filmsToSee.push(updateInfoFilmsUser)
				// user.save(...)
				console.log('user: '+user)
				var query = {name: req.body.nameUser};
				var update = { $set: { filmsToSee: user.filmsToSee }}
				User.update(query, update, {upsert:true}, function(err, doc){
					if (err) return res.send(500, { error: err });
					return res.send("succesfully saved");
				});
			} else if (filmExist) {
				// console.log('enter in filmExists ture')
				// // user.filmsToSee.push(updateInfoFilmsUser)
				// console.log('user: '+user)
				// var query = {
				// 	name: req.body.nameUser,
				// 	'filmsToSee.idFilm': req.body.idFilm
				// };
				// var update = { $set: {
				// 	'filmsToSee.$.idFilm': req.body.idFilm,
				// 	'filmsToSee.$.rate': req.body.rate,
				// 	'filmsToSee.$.mood': req.body.mood
				// }}
				// User.findOneAndUpdate(query, update, {upsert:true}, function(err, doc){
				// 	if (err) return res.send(500, { error: err });
				// 	console.log('ALL OK +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
				// });
					return res.send("succesfully saved");
			}
		}
	})
}

module.exports = infoFilmToSee;