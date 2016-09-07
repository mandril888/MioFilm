angular.module( 'homeModuleCtrl' )
	.controller( 'question4Controller' , function ( $rootScope, $scope, $http, questionsService, $q ) {

		//Predefined values to the Filter
		var numberFilmsToSearch = 6;
		var numVotesMinimum = 10;
		var rateToFilter = 5;
		//Input values of the Filter
		var moodSearchRecived = "";
		var minTimeRecived = "";
		var maxTimeRecived = "";
		var yearLimitRecived = "";

		$scope.$on('moodSearchSend', function(evt, message){
			moodSearchRecived = message;
		})
		$scope.$on('oTimeSend', function(evt, message){
			minTimeRecived = message.minTime;
			maxTimeRecived = message.maxTime;
		})
		$scope.$on('yearLimitSend', function(evt, message){
			yearLimitRecived = message;
		})

		$scope.searchFilmWithFilter = function() {
			$('.list-films').css('display', 'flex')
			$('.insert-text').html('<h1>You have searched: <span class="item-searched">' + moodSearchRecived + '</span></h1>')
			// $('#question4 span').html('Repeat the search');
			$('html, body').animate({
				scrollTop: $('.to-move-scroll').offset().top
			}, 1000);

			var moodNumber;
			if ( moodSearchRecived === 'Sad' ) { moodNumber = '80|18|10752';
			} else if ( moodSearchRecived === 'Joyful') { moodNumber = '12|16|35|10751|14|10402|10749';
			} else if ( moodSearchRecived === 'Mad') { moodNumber = '28|80|53|10752';
			} else if ( moodSearchRecived === 'Powerful') { moodNumber = '28|12|14|9648|878|53';
			} else if ( moodSearchRecived === 'Scared') { moodNumber = '80|27|9648';
			} else if ( moodSearchRecived === 'Peaceful') { moodNumber = '99|10751|14|36|10402|10749';
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
						if( yearShootFilm >= yearLimitRecived ) {
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
						if ( durationFilm >= minTimeRecived && durationFilm <= maxTimeRecived ) {
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
	})