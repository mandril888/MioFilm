angular.module( 'toSeeService', [ ] )
	.factory('toSeeService', function( $http ) {

		var urlToSearchFilm = 'http://api.themoviedb.org/3/movie/<ID_MOVIE>?api_key=71bd8c83c5cc06c197435d2165ac52e4';

		function getSpecificationsFilm ( idFilmToSearch ) {
			var urlToSearchFilmChanged = urlToSearchFilm.replace('<ID_MOVIE>', idFilmToSearch)
			console.log(urlToSearchFilmChanged)
			return $http.get( urlToSearchFilmChanged )
		}

		function getInfoUser( nameUser ) {
			console.log('paso2: '+nameUser)
			return $http.post( '/api/info-user-toSee', nameUser )
		}

		function deleteMovie ( filmToDelete ) {
			console.log('paso2: '+filmToDelete)
			return $http.post( '/api/delete-film-toSee', filmToDelete )
		}

		return {
			getSpecificationsFilm : getSpecificationsFilm,
			getInfoUser : getInfoUser,
			deleteMovie : deleteMovie
		}

	})