angular.module( 'specificationsModuleCtrl', [ ] )
	.controller( 'specificationsController' , function ( $localStorage, $scope, $http, $routeParams, specificationsService ) {

		$scope.imageNotFoundCover = '../../img/image-not-found-cover.jpg';
		$scope.imageNotFoundHeaderCover = '../../img/image-not-found-header-cover.jpg';
		$scope.specificationsFilmSearched = "";
		var filmId = $routeParams.FILMID;

		specificationsService.getSpecificationsFilm( filmId )
			.then( function ( dataFilmSearched ){
				$scope.specificationsFilmSearched = dataFilmSearched.data;
			})
	})