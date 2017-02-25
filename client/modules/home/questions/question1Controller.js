angular.module( 'homeModuleCtrl' )
	.controller( 'question1Controller' , function ( $rootScope, $scope ) {

		$scope.visible = false;

		var oMoodsOpposite = {
			Mad: 'Peaceful',
			Peaceful: 'Mad',
			Scared: 'Powerful',
			Powerful: 'Scared',
			Joyful: 'Sad',
			Sad: 'Joyful',
		}

		var moodFeelingRecived = '';
		var moodSearch = '';

		$scope.$on('moodFeelingSend', function(evt, message){
			moodFeelingRecived = message;
		})

		$scope.filterSetMoodFilm = function ( info ) {
			$('#question2').css('display', 'block');
			$('#question1').css('display', 'none');
			$('#question4 span').html("I'll have luck");

			if ( info === 'mood') {
				moodSearch = moodFeelingRecived;
			} else {
				moodSearch = oMoodsOpposite[moodFeelingRecived];
			}

			$rootScope.$broadcast('moodSearchSend', moodSearch);
		}

	})