angular.module( 'homeModuleCtrl' )
	.controller( 'searcherController' , function ( $rootScope, $scope, $http, searcherService ) {

		$scope.submit = function() {
			$('.questions-to-filter').css('display', 'none');
			$('.list-films').css('display', 'flex')
			$('html, body').animate({
				scrollTop: $('.list-films').offset().top
			}, 1000);
			$('.insert-text').html('<h1>Has buscado: <span class="item-searched">' + $scope.filmToSearch + '</span></h1>')

			searcherService.getInfoFilm( $scope.filmToSearch )
				.then( function ( dataFilmSearched ){
					$rootScope.$broadcast('infoFilmSearched', dataFilmSearched.data.results);
				})
		}
	})