angular.module( 'loginModuleCtrl', [ ] )
	.controller( 'loginController' , function ( $localStorage, $scope, $location, loginService ) {

		$scope.storage = $localStorage;

		console.log($localStorage.token)
		if ($localStorage.token !== undefined) {
			$location.path( 'profile' )
		}

		$scope.submit = function() {

			var user = {
				userName: $scope.userName,
				userPassword: $scope.userPassword
			}
			console.log('User: '+user.userName+' '+user.userPassword)
			loginService.login( user )
				.then( function( data ) {
					console.log(data)
					if (data.data.success === true) {
						$scope.storage.token = data.data.token;
						console.log($scope.storage.token)
						console.log( 'LOGIN CORRECT' );
						$location.path( 'profile' );
					} else if (data.data.success === false){
						console.log( 'LOGIN INCORRECT' );
						$location.path( 'login' );
						$('.failed-login').css('display', 'block');
					}
				})
		}
	})