angular.module( 'homeService', [ ] )
	.factory('homeService', function( $http, $q ) {

		var urlToSearchFilm = 'http://api.themoviedb.org/3/search/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&query=<SEARCH>';
		var urlToSearchFilmByMood = 'https://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&with_genres=<MOOD_NUM>&page=<PAGE>';

		function getInfoFilm ( filmToSearch ) {
			var urlToSearchFilmChanged = urlToSearchFilm.replace('<SEARCH>', filmToSearch)
			return $http.get( urlToSearchFilmChanged )
		}

		function getInfoFilmByMood ( moodNumber ) {
			var randomPage = Math.floor(Math.random() * 1000) + 1;
			var mapObj = {
				'<MOOD_NUM>': moodNumber,
				'<PAGE>': randomPage
			};
			var urlToSearchFilmByMoodChanged = urlToSearchFilmByMood.replace(/<MOOD_NUM>|<PAGE>/gi, function(matched){
				return mapObj[matched];
			});

			return promise = $http.get( urlToSearchFilmByMoodChanged )
		}


		// REVISAR - esta petición es la misma que la de specificationsService
		var urlToGetInfoFilm = 'http://api.themoviedb.org/3/movie/<ID_MOVIE>?api_key=71bd8c83c5cc06c197435d2165ac52e4';
		function getSpecificationsFilm ( idFilmToSearch ) {
			var urlToSearchFilmChanged = urlToGetInfoFilm.replace('<ID_MOVIE>', idFilmToSearch)
			return $http.get( urlToSearchFilmChanged ) // return a promise
		}


		return {
			getInfoFilm : getInfoFilm,
			getInfoFilmByMood : getInfoFilmByMood,
			getSpecificationsFilm : getSpecificationsFilm
		}

	})