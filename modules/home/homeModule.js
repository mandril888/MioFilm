angular.module( 'homeModule', [ ] )
	.controller( 'homeController' , function ( $scope, $http, homeService ) {

		$scope.infoFilmSearched = "";

		$scope.submit = function() {
			homeService.getInfoFilm( $scope.filmToSearch )
				.then( function ( dataFilmSearched ){
					$scope.infoFilmSearched = dataFilmSearched.data.results;
					console.log($scope.infoFilmSearched);
				})
		}

		$scope.searchFilmByMood = function( mood ) {

			console.log(mood)
			var randomPage = Math.floor(Math.random() * 1000) + 1;
			var moodNumber;

			if ( mood === 'Sad' ) {
				moodNumber = '18|10752|80';
			} else if ( mood === 'Joyful') {
				moodNumber = '37';
			} else if ( mood === 'Mad') {
				moodNumber = '99';
			} else if ( mood === 'Powerful') {
				moodNumber = '10751';
			} else if ( mood === 'Scared') {
				moodNumber = '10769';
			} else if ( mood === 'Peaceful') {
				moodNumber = '10402';
			}

			homeService.getInfoFilmByMood( moodNumber, randomPage )
				.then( function ( dataFilmSearched ){
					$scope.infoFilmSearched = dataFilmSearched.data.results;
					console.log($scope.infoFilmSearched);
				})
		}

	})