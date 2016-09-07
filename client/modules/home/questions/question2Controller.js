angular.module( 'homeModuleCtrl' )
	.controller( 'question2Controller' , function ( $rootScope, $scope ) {

		var oTime = {};

		$scope.filterSetDurationFilm = function ( minDuration, maxDuration ) {
			$('#question3').css('display', 'block');
			$('#question2').css('display', 'none');

			oTime = {
				minTime: minDuration,
				maxTime: maxDuration
			}

			$rootScope.$broadcast('oTimeSend', oTime);
		}
	})