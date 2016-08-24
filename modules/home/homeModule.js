angular.module( 'homeModule', [ ] )
	.controller( 'homeController' , function ( $scope, $http, homeService, $q ) {

		$scope.imageNotFoundCover = '../../img/image-not-found-cover.jpg';
		$scope.infoFilmSearched = "";


		// Estos valores vendrán del filtro y tendrán que entrar por los argumentos de la función
		var numberFilmsToSearch = 6;
		var numVotesMinimum = 10;
		var rateToFilter = 5;
		var yearToFilter = 2000;
		var durationToFilter = 90;


		$scope.submit = function() {
			$('.list-films').css('display', 'flex')
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">'+ $scope.filmToSearch + '</span></h1>')

			homeService.getInfoFilm( $scope.filmToSearch )
				.then( function ( dataFilmSearched ){
					$scope.infoFilmSearched = dataFilmSearched.data.results;
					console.log($scope.infoFilmSearched);
				})
		}

		$scope.searchFilmByMood = function( mood ) {
			$('.list-films').css('display', 'flex')
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">' + mood + '</span></h1>')

			var moodNumber;

			if ( mood === 'Sad' ) {
				moodNumber = '80|18|10752';
			} else if ( mood === 'Joyful') {
				moodNumber = '12|16|35|10751|14|10402|10749';
			} else if ( mood === 'Mad') {
				moodNumber = '28|80|53|10752';
			} else if ( mood === 'Powerful') {
				moodNumber = '28|12|14|9648|878|53';
			} else if ( mood === 'Scared') {
				moodNumber = '80|27|9648';
			} else if ( mood === 'Peaceful') {
				moodNumber = '99|10751|14|36|10402|10749';
			}

			var aFilmsFiltered = [];

			homeService.getInfoFilmByMood( moodNumber )
				.then( function( data ) {
					filterFilms( data, moodNumber, aFilmsFiltered )
				})
		}

		function filterFilms ( dataFilmSearched, moodNumber, aFilmsFiltered ) {
			var promisesDetailsFilms = [];
			dataFilmSearched.data.results.forEach(function (item, i) {
				var singleFilmSearched = item;
				if( singleFilmSearched.vote_count >= numVotesMinimum ) {
					if( singleFilmSearched.vote_average >= rateToFilter ){
						var yearShootFilm = singleFilmSearched.release_date.slice(0,4);
						if( yearShootFilm >= yearToFilter ) {
							var promise = homeService.getSpecificationsFilm( singleFilmSearched.id );
							promisesDetailsFilms.push(promise);
						}
					}
				}
			})

			$q.all( promisesDetailsFilms )
				.then( function ( aDataFilmSearched ){
					aDataFilmSearched.forEach( function (item, i) {
						var durationFilm = item.data.runtime;
						if ( durationFilm >= durationToFilter) {
							if( aFilmsFiltered.length < numberFilmsToSearch ) {
								return aFilmsFiltered.push( item.data );
							}
						}
					})
				})


			if ( aFilmsFiltered.length < numberFilmsToSearch ) {
				homeService.getInfoFilmByMood( moodNumber )
					.then( function( data ) {
						filterFilms( data, moodNumber, aFilmsFiltered )
					})
			}

			$scope.infoFilmSearched = aFilmsFiltered;
		}

		$('button').on('click', function(event){
			$('html, body').animate({
				scrollTop: $('.to-move-scroll').offset().top
			}, 500);
		});

		$('a').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('.to-move-scroll').offset().top
			}, 500);
		});

		$('.go-top').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0 }, 500);
		});

	})