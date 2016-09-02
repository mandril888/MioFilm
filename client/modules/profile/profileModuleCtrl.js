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

		var infoToken = parseJwt($localStorage.token);
		console.log('paso1: '+infoToken._doc.name)
		profileService.getInfoUser(infoToken._doc.name)
			.then(function ( infoUser ){
				console.log('user info:'+infoUser)
				infoUser.forEach(function(item){
					profileService.getSpecificationsFilm( item )
						.then( function ( dataFilmSearched ){
							console.log(dataFilmSearched)
							$scope.infoFilmSeen.push(dataFilmSearched.data);
						})
				})
			})

	})