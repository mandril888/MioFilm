angular.module( 'homeService', [ ] )
	.factory('homeService', function( $http, $q ) {

		var urlToSearchFilm = 'http://api.themoviedb.org/3/search/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&query=<SEARCH>';
		var urlToSearchFilmByMood1 = 'https://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&with_genres=<MOOD_NUM>&page=<PAGE1>';
		var urlToSearchFilmByMood2 = 'https://api.themoviedb.org/3/discover/movie?api_key=71bd8c83c5cc06c197435d2165ac52e4&with_genres=<MOOD_NUM>&page=<PAGE2>';

		function getInfoFilm ( filmToSearch ) {
			var urlToSearchFilmChanged = urlToSearchFilm.replace('<SEARCH>', filmToSearch)
			console.log(urlToSearchFilmChanged)
			return $http.get( urlToSearchFilmChanged )
		}

		function getInfoFilmByMood ( moodNumber, randomPage1, randomPage2 ) {

			var mapObj = {
				'<MOOD_NUM>': moodNumber,
				'<PAGE1>': randomPage1,
				'<PAGE2>': randomPage2
			};
			console.log(mapObj)
			var urlToSearchFilmByMoodChanged1 = urlToSearchFilmByMood1.replace(/<MOOD_NUM>|<PAGE1>/gi, function(matched){
				return mapObj[matched];
			});
			var urlToSearchFilmByMoodChanged2 = urlToSearchFilmByMood2.replace(/<MOOD_NUM>|<PAGE2>/gi, function(matched){
				return mapObj[matched];
			});
			console.log(urlToSearchFilmByMoodChanged1)
			console.log(urlToSearchFilmByMoodChanged2)


			var promise1 = $http.get( urlToSearchFilmByMoodChanged1 )
			var promise2 = $http.get( urlToSearchFilmByMoodChanged2 )
			
			return $q.all( [promise1, promise2] )
		}

		return {
			getInfoFilm : getInfoFilm,
			getInfoFilmByMood : getInfoFilmByMood
		}

	})