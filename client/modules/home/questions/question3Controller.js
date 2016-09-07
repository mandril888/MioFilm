angular.module( 'homeModuleCtrl' )
	.controller( 'question3Controller' , function ( $rootScope, $scope ) {

		var yearLimit = '';

		$scope.filterSetProduced = function ( timeProduced ) {
			$('#question4').css('display', 'block');
			$('#question3').css('display', 'none');

			yearLimit = timeProduced;

			$rootScope.$broadcast('yearLimitSend', yearLimit);
		}
	})