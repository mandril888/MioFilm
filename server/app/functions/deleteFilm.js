var User = require('./../models/user');

function deleteFilm (req, res) {

	User.update(
		{ name: req.body.nameUser },
		{ $pull: { filmsWatched : { idFilm:req.body.filmToDelete } } },
		{ safe: true },
		function (err, obj) {
		});
	res.end();

}

module.exports = deleteFilm;