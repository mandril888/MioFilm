function showJsonUsers (req, res) {
	User.find({}, function(err, users) {
		res.json(users);
	});
}

module.exports = showJsonUsers;