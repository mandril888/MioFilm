angular.module( 'profileModuleCtrl', [ ] )
	.controller( 'profileController' , function ( $localStorage, $scope, $location, profileService ) {

		if (!$localStorage.token) {
			$location.path( 'login' )
		}

		$scope.imageNotFoundCover = '../../img/image-not-found-cover.jpg';
		console.log($localStorage.token)
		$scope.infoFilmSeen = [];

		function parseJwt (token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse(window.atob(base64));
		};

		console.log('in the profileController')

		var infoToken = parseJwt($localStorage.token);
		console.log('paso1: '+infoToken._doc.name)
		var nameUser = {nameUser:infoToken._doc.name}
		profileService.getInfoUser(nameUser)
			.then(function ( userFilmsWatched ){
				console.log('user films seen:'+userFilmsWatched)
				console.log(userFilmsWatched.data)
				if(userFilmsWatched.data.length!==0){
					userFilmsWatched.data.forEach(function(item){
						profileService.getSpecificationsFilm( item.idFilm )
							.then( function ( dataFilmSearched ){
								console.log(dataFilmSearched)
								var userInfoFilm = {
									id: dataFilmSearched.data.id,
									poster_path: dataFilmSearched.data.poster_path,
									original_title: dataFilmSearched.data.original_title,
									mood: item.mood,
									rate: item.rate
								}
								$scope.infoFilmSeen.push(userInfoFilm);
							})
					})
				}
			})

		$scope.logout = function(){
			console.log('logout')
			window.location.reload(true);
			localStorage.clear();
		}
	})