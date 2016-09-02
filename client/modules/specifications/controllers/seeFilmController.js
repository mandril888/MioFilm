angular.module( 'specificationsModuleCtrl' )
	.controller( 'seeFilmController' , function ( $localStorage, $scope, $http, specificationsService ) {

		$scope.movieSeen = function (idFilm) {
			console.log(idFilm)
			if ($localStorage.token !== undefined) {
				$('.img-imagotipo').attr("src","../../img/miofilm-imagotipo.png");

				var infoUser = parseJwt($localStorage.token);
				var nameUser = infoUser._doc.name;
				var infoFilmSeen = {
					nameUser: nameUser,
					idFilm: idFilm
				}
				specificationsService.postInfoSeenFilms( infoFilmSeen )
					.then( function( data ) {
						console.log(data)
					})
			} else {
				$('.not-logged').css('display', 'block')
			}
		}

		function parseJwt (token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse(window.atob(base64));
		};
	})