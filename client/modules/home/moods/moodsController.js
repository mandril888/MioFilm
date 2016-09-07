angular.module( 'homeModuleCtrl' )
	.controller( 'moodsController' , function ( $rootScope, $scope ) {

		$scope.filterSelectedFeelsMood = function( mood ) {
			// $('.questions-to-filter').css('display', 'block');
			// $('.questions-to-filter').animate({
			// 	'height': '250px',
			// 	'padding': '50px 0 0 -800px'
			// }, 1500);
			// $('#question1').css('display', 'block');
			// $('#question1').delay(1000).animate({
			// 	'padding-left': '950px'
			// }, 1000);
			// $('#question2').css('display', 'none');
			// $('#question3').css('display', 'none');
			// $('#question4').css('display', 'none');
			// $('.list-films').css('display', 'none');

			var moodFeelingSend = mood;
			$rootScope.$broadcast('moodFeelingSend', moodFeelingSend);
		}

		$('.go-dawn').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('.to-move-scroll').offset().top
			}, 1500);
		});
	})