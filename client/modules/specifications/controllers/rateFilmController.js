angular.module( 'specificationsModuleCtrl' )
	.controller( 'rateFilmController' , function ( $localStorage, $scope, $rootScope ) {

		$scope.rate = function (rate) {
			console.log(rate)
			if ($localStorage.token) {
				$rootScope.$broadcast('rateSend', rate);
			} else {
				$('.not-logged').css('display', 'block')
			}
		}
	})