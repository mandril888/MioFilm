angular.module( 'specificationsService', [ ] )
	.factory('specificationsService', function( $http ) {

		var urlToSearchFilm = 'http://api.themoviedb.org/3/movie/<ID_MOVIE>?api_key=71bd8c83c5cc06c197435d2165ac52e4';

		function getSpecificationsFilm ( idFilmToSearch ) {
			var urlToSearchFilmChanged = urlToSearchFilm.replace('<ID_MOVIE>', idFilmToSearch)
			console.log(urlToSearchFilmChanged)
			return $http.get( urlToSearchFilmChanged )
		}

		function postInfoSeenFilms( infoFilmSeen ) {
			console.log(infoFilmSeen)
			return $http.post( '/api/film-seen', infoFilmSeen )
		}

		function postInfoToSeeFilms( infoFilmSeen ) {
			console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
			console.log(infoFilmSeen)
			return $http.post( '/api/film-toSee', infoFilmSeen )
		}

		return {
			getSpecificationsFilm : getSpecificationsFilm,
			postInfoSeenFilms : postInfoSeenFilms,
			postInfoToSeeFilms : postInfoToSeeFilms
		}

	})