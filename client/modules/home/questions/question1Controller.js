angular.module( 'homeModuleCtrl' )
	.controller( 'question1Controller' , function ( $rootScope, $scope ) {

		$scope.visible = false;

		var oMoodsOpposite = {
			Mad: 'Scared',
			Scared: 'Mad',
			Joyful: 'Powerful',
			Powerful: 'Joyful',
			Peaceful: 'Sad',
			Sad: 'Peaceful',
		}

		var moodFeelingRecived = '';
		var moodSearch = '';

		$scope.$on('moodFeelingSend', function(evt, message){
			moodFeelingRecived = message;
		})

		$scope.filterSetMoodFilm = function ( info ) {
			$('#question2').css('display', 'block');
			$('#question1').css('display', 'none');

			if ( info === 'mood') {
				moodSearch = moodFeelingRecived;
			} else {
				moodSearch = oMoodsOpposite[moodFeelingRecived];
			}

			$rootScope.$broadcast('moodSearchSend', moodSearch);
		}

	})