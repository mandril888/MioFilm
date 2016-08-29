angular.module( 'homeModuleCtrl' )
	.controller( 'question2Controller' , function ( $rootScope, $scope ) {

		var oTime = {};

		$scope.filterSetDurationFilm = function ( minDuration, maxDuration ) {
			$('#question2').animate({
				'padding-left': '2200px'
			}, 1500).hide(0);
			$('#question3').css('display', 'block');
			$('#question3').delay(1500).animate({
				'padding-left': '950px'
			}, 1500);

			oTime = {
				minTime: minDuration,
				maxTime: maxDuration
			}
			console.log(oTime)
		}

		$rootScope.$broadcast('moodSearchSend', oTime);

	})