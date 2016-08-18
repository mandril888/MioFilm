angular.module( 'homeService', [ ] )
	.factory('homeService', function( $http ) {

		var urlToSearchFilm = 'http://api.themoviedb.org/3/search/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&query=<SEARCH>';

		function getInfoFilm ( filmToSearch ) {
			var urlToSearchFilmMod = urlToSearchFilm.replace('<SEARCH>', filmToSearch)
			console.log(urlToSearchFilmMod)
			return $http.get( urlToSearchFilmMod )
		}

		return {
			getInfoFilm : getInfoFilm
		}

	})