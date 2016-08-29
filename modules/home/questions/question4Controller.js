angular.module( 'homeModuleCtrl' )
	.controller( 'question4Controller' , function ( $rootScope, $scope, $http, questionsService, $q ) {

		//Input values of the Filter
		var moodSearch = "";
		var minTime = "";
		var maxTime = "";
		var yearLimit = "";

		//Predefined values to the Filter
		var numberFilmsToSearch = 6;
		var numVotesMinimum = 10;
		var rateToFilter = 5;

		$scope.searchFilmWithFilter = function() {
			$('.list-films').css('display', 'flex')
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">' + moodSearch + '</span></h1>')
			$('.repeat-search').css('display', 'flex')
			$('#question4').html("<a href='/#/' ng-click='searchFilmWithFilter()' class='luck-search'>Repeat the search</a>");

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

			questionsService.getInfoFilmByMood( moodNumber )
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
							var promise = questionsService.getSpecificationsFilm( singleFilmSearched.id );
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
				questionsService.getInfoFilmByMood( moodNumber )
					.then( function( data ) {
						filterFilms( data, moodNumber, aFilmsFiltered )
					})
			}

			$rootScope.$broadcast('infoFilmSearchedByMood', aFilmsFiltered);
		}

		//REVISAR - no pueden ser todos los tags a
		$('a').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('.to-move-scroll').offset().top
			}, 1500);
		});


	})