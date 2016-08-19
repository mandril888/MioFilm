angular.module( 'homeService', [ ] )
	.factory('homeService', function( $http ) {

		var urlToSearchFilm = 'http://api.themoviedb.org/3/search/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&query=<SEARCH>';
		var urlToSearchFilmByMood = 'https://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&with_genres=<MOOD_NUM>&page=<PAGE>';

		function getInfoFilm ( filmToSearch ) {
			var urlToSearchFilmChanged = urlToSearchFilm.replace('<SEARCH>', filmToSearch)
			console.log(urlToSearchFilmChanged)
			return $http.get( urlToSearchFilmChanged )
		}

		function getInfoFilmByMood ( moodNumber, randomPage ) {

			var mapObj = { '<MOOD_NUM>':moodNumber, '<PAGE>':randomPage };
			console.log(mapObj)
			var urlToSearchFilmByMoodChanged = urlToSearchFilmByMood.replace(/<MOOD_NUM>|<PAGE>/gi, function(matched){
				return mapObj[matched];
			});
			console.log(urlToSearchFilmByMoodChanged)
			return $http.get( urlToSearchFilmByMoodChanged )
		}

		return {
			getInfoFilm : getInfoFilm,
			getInfoFilmByMood : getInfoFilmByMood
		}

	})