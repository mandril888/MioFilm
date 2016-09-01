angular.module( 'homeService' )
	.factory('searcherService', function( $http ) {

		var urlToSearchFilm = 'http://api.themoviedb.org/3/search/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&query=<SEARCH>';

		function getInfoFilm ( filmToSearch ) {
			var urlToSearchFilmChanged = urlToSearchFilm.replace('<SEARCH>', filmToSearch)
			return $http.get( urlToSearchFilmChanged )
		}

		return {
			getInfoFilm : getInfoFilm
		}
	})