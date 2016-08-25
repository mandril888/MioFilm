angular.module( 'homeModule', [ ] )
	.controller( 'homeController' , function ( $scope, $http, homeService, $q ) {

		$scope.imageNotFoundCover = '../../img/image-not-found-cover.jpg';
		$scope.infoFilmSearched = "";

		var numberFilmsToSearch = 6;
		var numVotesMinimum = 10;
		var rateToFilter = 5;

		var moodFeeling = "";
		var moodSearch = "";
		var minTime = "";
		var maxTime = "";
		var yearLimit = "";

		var oMoodsOpposite = {
			Mad: 'Scared',
			Scared: 'Mad',
			Joyful: 'Powerful',
			Powerful: 'Joyful',
			Peaceful: 'Sad',
			Sad: 'Peaceful',
		}

		$scope.submit = function() {
			$('.list-films').css('display', 'flex')
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">'+ $scope.filmToSearch + '</span></h1>')

			homeService.getInfoFilm( $scope.filmToSearch )
				.then( function ( dataFilmSearched ){
					$scope.infoFilmSearched = dataFilmSearched.data.results;
				})
		}

		$scope.filterSelectedFeelsMood = function( mood ) {
			$('.questions-to-filter').css('display', 'block');
			$('#question1').css('display', 'block');
			$('.questions-to-filter').animate({
				'height': '100%',
				'padding': '30px 20%'
			}, 2000);
			moodFeeling = mood;
		}

		$scope.filterSetMoodFilm = function ( info ) {
			$('#question1').css('display', 'none');
			$('#question2').css('display', 'block');
			if ( info === 'mood') {
				moodSearch = moodFeeling;
			} else {
				moodSearch = oMoodsOpposite[moodFeeling];
			}
		}

		$scope.filterSetDurationFilm = function ( minDuration, maxDuration ) {
			$('#question2').css('display', 'none');
			$('#question3').css('display', 'block');
			minTime = minDuration;
			maxTime = maxDuration;
		}

		$scope.filterSetProduced = function ( timeProduced ) {
			$('#question3').css('display', 'none');
			$('#question4').css('display', 'block');
			yearLimit = timeProduced;
		}

		$scope.searchFilmWithFilter = function() {
			$('.list-films').css('display', 'flex')
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">' + moodSearch + '</span></h1>')

			var moodNumber;

			if ( moodSearch === 'Sad' ) {
				moodNumber = '80|18|10752';
			} else if ( moodSearch === 'Joyful') {
				moodNumber = '12|16|35|10751|14|10402|10749';
			} else if ( moodSearch === 'Mad') {
				moodNumber = '28|80|53|10752';
			} else if ( moodSearch === 'Powerful') {
				moodNumber = '28|12|14|9648|878|53';
			} else if ( moodSearch === 'Scared') {
				moodNumber = '80|27|9648';
			} else if ( moodSearch === 'Peaceful') {
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
						if( yearShootFilm >= yearLimit ) {
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
						if ( durationFilm >= minTime && durationFilm <= maxTime ) {
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

		//REVISAR - no pueden ser todos los tags a
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