angular.module( 'homeModuleCtrl' )
	.controller( 'question3Controller' , function ( $rootScope, $scope ) {

		var yearLimit = '';

		$scope.filterSetProduced = function ( timeProduced ) {
			$('#question3').animate({
				'padding-left': '2200px'
			}, 1000).hide(0);
			$('#question4').css('display', 'block');
			$('#question4').delay(1000).animate({
				'padding-left': '1150px'
			}, 1000);

			yearLimit = timeProduced;

			$rootScope.$broadcast('yearLimitSend', yearLimit);
		}
	})