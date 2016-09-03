angular.module( 'specificationsModuleCtrl' )
	.controller( 'seeFilmController' , function ( $localStorage, $scope, $rootScope ) {

		$scope.movieSeen = function (idFilm) {
			console.log(idFilm)
			if ($localStorage.token) {
				$('.img-imagotipo').attr("src","../../img/miofilm-imagotipo.png");
				$rootScope.$broadcast('seeFilmSend', idFilm);
			} else {
				$('.not-logged').css('display', 'block')
			}
		}
	})