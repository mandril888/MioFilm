angular.module( 'homeModule', [ ] )
	.controller( 'homeController' , function ( $scope, $http, homeService ) {

		$scope.infoFilmSearched = "";

		$scope.submit = function() {
			$('.list-films').css('display', 'flex')
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">'+ $scope.filmToSearch + '</span></h1>')

			homeService.getInfoFilm( $scope.filmToSearch )
				.then( function ( dataFilmSearched ){
					$scope.infoFilmSearched = dataFilmSearched.data.results;
					console.log($scope.infoFilmSearched);
				})
		}

		$scope.searchFilmByMood = function( mood ) {
			$('.list-films').css('display', 'flex')
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">' + mood + '</span></h1>')

			console.log(mood)
			var randomPage1 = Math.floor(Math.random() * 1000) + 1;
			var randomPage2 = Math.floor(Math.random() * 1000) + 1;
			var moodNumber;

			if ( mood === 'Sad' ) {
				moodNumber = '80|18|10752';
			} else if ( mood === 'Joyful') {
				moodNumber = '12|16|35|10751|14|10402|10749';
			} else if ( mood === 'Mad') {
				moodNumber = '28|80|53|10752';
			} else if ( mood === 'Powerful') {
				moodNumber = '28|12|14|9648|878|53';
			} else if ( mood === 'Scared') {
				moodNumber = '80|27|9648';
			} else if ( mood === 'Peaceful') {
				moodNumber = '99|10751|14|36|10402|10749';
			}

			homeService.getInfoFilmByMood( moodNumber, randomPage1, randomPage2 )
				.then( function ( dataFilmSearched ){
					console.log(dataFilmSearched)
					$scope.infoFilmSearched = dataFilmSearched[0].data.results;
					console.log($scope.infoFilmSearched);
				})
		}

	})