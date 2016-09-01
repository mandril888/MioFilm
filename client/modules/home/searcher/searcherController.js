angular.module( 'homeModuleCtrl' )
	.controller( 'searcherController' , function ( $rootScope, $scope, $http, searcherService ) {
		console.log('aaaa')

		$scope.submit = function() {
			console.log('bbbbbb')
			$('.questions-to-filter').css('display', 'none');
			$('.list-films').css('display', 'flex')
			$('html, body').animate({
				scrollTop: $('.list-films').offset().top
			}, 1000);
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">' + $scope.filmToSearch + '</span></h1>')

			// $rootScope.$broadcast('newSearchValue', $scope.filmToSearch);
			var filmSelected = $scope.filmToSearch;
			console.log(filmSelected)

			searcherService.getInfoFilm( filmSelected )
				.then( function ( dataFilmSearched ){
					console.log('service searcher')
					$rootScope.$broadcast('infoFilmSearched', dataFilmSearched.data.results);
				})
		}
	})