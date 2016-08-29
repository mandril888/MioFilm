angular.module( 'homeModuleCtrl' )
	.controller( 'question3Controller' , function ( $rootScope, $scope ) {

		var yearLimit = '';

		$scope.filterSetProduced = function ( timeProduced ) {
			$('#question3').animate({
				'padding-left': '2200px'
			}, 1500).hide(0);
			$('#question4').css('display', 'block');
			$('#question4').delay(1500).animate({
				'padding-left': '1150px'
			}, 1500);

			yearLimit = timeProduced;

			$rootScope.$broadcast('yearLimitSend', yearLimit);
		}
	})