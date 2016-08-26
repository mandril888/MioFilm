angular.module( 'homeModuleCtrl' )
	.controller( 'searcherController' , function ( $scope, $http, searcherService ) {
		$scope.submit = function() {
			$('.list-films').css('display', 'flex')
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">' + moodSearch + '</span></h1>')
			$('.questions-to-filter').css('display', 'none');

			searcherService.getInfoFilm( $scope.filmToSearch )
				.then( function ( dataFilmSearched ){
					$scope.infoFilmSearched = dataFilmSearched.data.results;
				})
		}
	})