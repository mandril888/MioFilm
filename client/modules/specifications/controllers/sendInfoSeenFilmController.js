angular.module( 'specificationsModuleCtrl' )
	.controller( 'sendInfoSeenFilmController' , function ( $localStorage, $scope, $http, specificationsService ) {

		var idFilmRecived = "";
		var rateRecived;
		var moodRecived = "";

		// $scope.$on('seeFilmSend', function(evt, message){
		// 	idFilmRecived = message;
		// })
		$scope.$on('rateSend', function(evt, message){
			rateRecived = message;
		})
		$scope.$on('moodSend', function(evt, message){
			moodRecived = message;
		})

		$scope.sendInfoSeenFilm = function ( idFilm ) {
			$('.not-info-complete').css('display', 'none');
			$('.info-complete').css('display', 'none');
			$('.not-logged').css('display', 'none')

			var idFilmRecived = idFilm;

			if ($localStorage.token) {
				if(idFilmRecived && rateRecived && moodRecived) {
					var infoUser = parseJwt($localStorage.token);
					var nameUser = infoUser._doc.name;
					var infoFilmSeen = {
						nameUser: nameUser,
						idFilm: idFilmRecived,
						rate: rateRecived,
						mood: moodRecived
					}
					specificationsService.postInfoSeenFilms( infoFilmSeen )
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