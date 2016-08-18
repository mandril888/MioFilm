angular.module( 'specificationsModule', [ ] )
	.controller( 'specificationsController' , function ( $scope, $http, $routeParams, specificationsService ) {

		$scope.specificationsFilmSearched = "";
		var filmId = $routeParams.FILMID;

		specificationsService.getSpecificationsFilm( filmId )
			.then( function ( dataFilmSearched ){
				$scope.specificationsFilmSearched = dataFilmSearched.data;
				console.log($scope.specificationsFilmSearched);
			})

	})