angular.module( 'specificationsModuleCtrl' )
	.controller( 'sendInfoToSeeFilmController' , function ( $localStorage, $scope, $http, specificationsService ) {

		var idFilmRecived = "";

		$scope.sendInfoToSeeFilm = function ( idFilm ) {
			$('.not-info-complete').css('display', 'none')
			$('.info-complete').css('display', 'none')
			$('.not-logged').css('display', 'none')
			console.log('csdvefrgvqliebvqijbdv')

			var idFilmRecived = idFilm;

			if ($localStorage.token) {
				if(idFilmRecived) {
					var infoUser = parseJwt($localStorage.token);
					var nameUser = infoUser._doc.name;
					var infoFilmSeen = {
						nameUser: nameUser,
						idFilm: idFilmRecived
					}
					console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
					console.log(nameUser+'   '+idFilmRecived)
					specificationsService.postInfoToSeeFilms( infoFilmSeen )
						.then( function( data ) {
							console.log(data)
							$('.not-info-complete').css('display', 'none')
							$('.info-complete').css('display', 'block')
						})
				} else {
					$('.not-info-complete').css('display', 'block')
				}
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