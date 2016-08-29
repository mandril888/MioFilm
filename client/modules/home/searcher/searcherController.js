angular.module( 'homeModuleCtrl' )
	.controller( 'searcherController' , function ( $rootScope, $scope, $http, searcherService ) {
		$scope.submit = function() {
			$('.list-films').css('display', 'flex')
			$('.questions-to-filter').css('display', 'none');
			$('html, body').animate({
				scrollTop: $('.to-move-scroll').offset().top
			}, 1000);

			$rootScope.$broadcast('newSearchValue', $scope.filmToSearch);

			searcherService.getInfoFilm( $scope.filmToSearch )
				.then( function ( dataFilmSearched ){
					$rootScope.$broadcast('infoFilmSearched', dataFilmSearched.data.results);
				})
		}
	})