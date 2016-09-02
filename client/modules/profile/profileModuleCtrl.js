angular.module( 'profileModuleCtrl', [ ] )
	.controller( 'profileController' , function ( $localStorage, $scope, $location, profileService ) {
		$scope.imageNotFoundCover = '../../img/image-not-found-cover.jpg';
		console.log($localStorage.token)
		$scope.infoFilmSeen = [];

		function parseJwt (token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse(window.atob(base64));
		};

		var idFilmsFromToken = parseJwt($localStorage.token);
		console.log(idFilmsFromToken._doc.filmsWatched)

		idFilmsFromToken._doc.filmsWatched.forEach(function(item){
			profileService.getSpecificationsFilm( item )
				.then( function ( dataFilmSearched ){
					console.log(dataFilmSearched)
					$scope.infoFilmSeen.push(dataFilmSearched.data);
				})
		})

	})