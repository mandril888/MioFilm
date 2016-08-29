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
			console.log('recived: '+moodFeelingRecived)
		})

		$scope.filterSetMoodFilm = function ( info ) {
			$('#question1').animate({
				'padding-left': '2200px'
			}, 1500).hide(0).animate({
				'padding-left': '0'
			}, 50);
			$('#question2').css('display', 'block');
			$('#question2').delay(1500).animate({
				'padding-left': '950px'
			}, 1500);

			if ( info === 'mood') {
				moodSearch = moodFeelingRecived;
			} else {
				moodSearch = oMoodsOpposite[moodFeelingRecived];
			}
			console.log(moodSearch)
		}

		$rootScope.$broadcast('moodSearchSend', moodSearch);

	})