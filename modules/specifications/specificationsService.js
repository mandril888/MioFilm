angular.module( 'specificationsService', [ ] )
	.factory('specificationsService', function( $http ) {

		var urlToSearchFilm = 'http://api.themoviedb.org/3/movie/<ID_MOVIE>?api_key=71bd8c83c5cc06c197435d2165ac52e4';

		function getSpecificationsFilm ( idFilmToSearch ) {
			var urlToSearchFilmMod = urlToSearchFilm.replace('<ID_MOVIE>', idFilmToSearch)
			console.log(urlToSearchFilmMod)
			return $http.get( urlToSearchFilmMod )
		}

		return {
			getSpecificationsFilm : getSpecificationsFilm
		}

	})