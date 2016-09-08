var User = require('./../models/user');

function deleteFilmToSee (req, res) {

	User.update(
		{ name: req.body.nameUser },
		{ $pull: { filmsToSee : { idFilm:req.body.filmToDelete } } },
		{ safe: true },
		function (err, obj) {
		});
	res.end();

}

module.exports = deleteFilmToSee;