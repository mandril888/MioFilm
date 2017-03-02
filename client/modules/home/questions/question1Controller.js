angular.module( 'homeModuleCtrl' )
	.controller( 'question1Controller' , function ( $rootScope, $scope ) {

		$scope.visible = false;

		var oMoodsTranslate = {
			Mad: 'Cabreado',
			Peaceful: 'Tranquilo',
			Scared: 'Asustado',
			Powerful: 'Potente',
			Joyful: 'Contento',
			Sad: 'Triste',
		}

		var oMoodsOppositeTranslate = {
			Mad: 'Tranquilo',
			Peaceful: 'Cabreado',
			Scared: 'Potente',
			Powerful: 'Asustado',
			Joyful: 'Triste',
			Sad: 'Contento',
		}

		var moodFeelingRecived = '';
		var moodSearch = '';

		$scope.$on('moodFeelingSend', function(evt, message){
			moodFeelingRecived = message;
		})

		$scope.filterSetMoodFilm = function ( info ) {
			$('#question2').css('display', 'block');
			$('#question1').css('display', 'none');
			$('#question4 span').html("Buscar");

			if ( info === 'mood') {
				moodSearch = oMoodsTranslate[moodFeelingRecived];
			} else {
				moodSearch = oMoodsOppositeTranslate[moodFeelingRecived];
			}

			$rootScope.$broadcast('moodSearchSend', moodSearch);
		}

	})