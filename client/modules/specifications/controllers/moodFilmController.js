angular.module( 'specificationsModuleCtrl' )
	.controller( 'moodFilmController' , function ( $localStorage, $scope, $rootScope ) {

		$scope.moodFelt = function (mood) {
			console.log(mood)
			if ($localStorage.token) {
				$rootScope.$broadcast('moodSend', mood);
			} else {
				$('.not-logged').css('display', 'block')
			}
		}
	})