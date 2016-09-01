angular.module( 'homeModuleCtrl' )
	.controller('listFilmsController', function( $rootScope, $scope ) {
		$scope.imageNotFoundCover = '../../img/image-not-found-cover.jpg';
		$scope.$on('infoFilmSearched', function(evt, message){
			$scope.infoFilmToList = message;
		})
		$scope.$on('infoFilmSearchedByMood', function(evt, message){
			console.log('moods')
			$scope.infoFilmToList = message;
		})
		$('.go-top').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0 }, 1500);
		});
	})