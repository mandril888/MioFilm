angular.module( 'homeModuleCtrl' )
	.controller( 'question1Controller' , function ( $rootScope, $scope ) {

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
			$('#question1').animate({
				'padding-left': '2200px'
			}, 1000).hide(0);
			$('#question2').css('display', 'block');
			$('#question2').delay(1000).animate({
				'padding-left': '950px'
			}, 1000);

			if ( info === 'mood') {
				moodSearch = moodFeelingRecived;
			} else {
				moodSearch = oMoodsOpposite[moodFeelingRecived];
			}

			$rootScope.$broadcast('moodSearchSend', moodSearch);
		}

	})