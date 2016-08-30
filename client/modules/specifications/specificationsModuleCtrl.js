angular.module( 'specificationsModuleCtrl', [ ] )
	.controller( 'specificationsController' , function ( $scope, $http, $routeParams, specificationsService ) {

		$scope.imageNotFoundCover = 'client/img/image-not-found-cover.jpg';
		$scope.imageNotFoundHeaderCover = 'client/img/image-not-found-header-cover.jpg';
		$scope.specificationsFilmSearched = "";
		var filmId = $routeParams.FILMID;

		specificationsService.getSpecificationsFilm( filmId )
			.then( function ( dataFilmSearched ){
				$scope.specificationsFilmSearched = dataFilmSearched.data;
			})

	})