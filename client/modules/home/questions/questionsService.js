angular.module( 'homeService' )
	.factory('questionsService', function( $http ) {

		var urlToSearchFilmByMood = 'https://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&with_genres=<MOOD_NUM>&page=<PAGE>&language=es';

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
		var urlToGetInfoFilm = 'https://api.themoviedb.org/3/movie/<ID_MOVIE>?api_key=71bd8c83c5cc06c197435d2165ac52e4&language=es';

		function getSpecificationsFilm ( idFilmToSearch ) {
			var urlToSearchFilmChanged = urlToGetInfoFilm.replace('<ID_MOVIE>', idFilmToSearch)
			return $http.get( urlToSearchFilmChanged ) // return a promise
		}

		return {
			getInfoFilmByMood : getInfoFilmByMood,
			getSpecificationsFilm : getSpecificationsFilm
		}

	})