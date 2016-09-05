angular.module( 'profileModuleCtrl' )
	.controller( 'listFilmsProfileController' , function ( $localStorage, $scope, $location, profileService ) {

		function parseJwt (token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse(window.atob(base64));
		};

		console.log('in the listFilmsProfileController')

		$scope.removeFilm = function ( idFilm ) {
			var idFilmToRemove = idFilm;
			console.log('film selected to delete: '+idFilmToRemove)
			var infoToken = parseJwt($localStorage.token);
			console.log('NAME: '+infoToken._doc.name)
			var filmToDelete = {
				nameUser: infoToken._doc.name,
				filmToDelete: idFilmToRemove
			}
			profileService.deleteMovie(filmToDelete)
				.then(function ( userFilmsWatched ){
					console.log('films deleted');
					location.reload();
				})
		}
	})