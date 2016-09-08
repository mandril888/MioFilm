angular.module( 'toSeeModuleCtrl', [ ] )
	.controller( 'toSeeController' , function ( $localStorage, $scope, $location, toSeeService ) {

		if (!$localStorage.token) {
			$location.path( 'login' )
		}

		$scope.imageNotFoundCover = '../../img/image-not-found-cover.jpg';
		console.log($localStorage.token)
		$scope.infoFilmToSee = [];

		function parseJwt (token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse(window.atob(base64));
		};

		console.log('in the toSeeController')

		var infoToken = parseJwt($localStorage.token);
		console.log('paso1: '+infoToken._doc.name)
		var nameUser = {nameUser:infoToken._doc.name}
		toSeeService.getInfoUser(nameUser)
			.then(function ( userFilmsWatched ){
				console.log('user films seen:'+userFilmsWatched)
				console.log(userFilmsWatched.data)
				if(userFilmsWatched.data.length!==0){
					userFilmsWatched.data.forEach(function(item){
						toSeeService.getSpecificationsFilm( item.idFilm )
							.then( function ( dataFilmSearched ){
								console.log(dataFilmSearched)
								var userInfoFilm = {
									id: dataFilmSearched.data.id,
									poster_path: dataFilmSearched.data.poster_path,
									original_title: dataFilmSearched.data.original_title,
									mood: item.mood,
									rate: item.rate
								}
								$scope.infoFilmToSee.push(userInfoFilm);
							})
					})
				} else {
					$('.no-films-stored').css('display', 'block')
				}
			})

		$scope.logout = function(){
			console.log('logout')
			window.location.reload(true);
			localStorage.clear();
		}
	})