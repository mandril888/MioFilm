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

	})