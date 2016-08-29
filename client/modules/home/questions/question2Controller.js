angular.module( 'homeModuleCtrl' )
	.controller( 'question2Controller' , function ( $rootScope, $scope ) {

		var oTime = {};

		$scope.filterSetDurationFilm = function ( minDuration, maxDuration ) {
			$('#question2').animate({
				'padding-left': '2200px'
			}, 1000).hide(0);
			$('#question3').css('display', 'block');
			$('#question3').delay(1000).animate({
				'padding-left': '950px'
			}, 1000);

			oTime = {
				minTime: minDuration,
				maxTime: maxDuration
			}

			$rootScope.$broadcast('oTimeSend', oTime);
		}
	})