angular.module( 'loginModuleCtrl', [ ] )
	.controller( 'loginController' , function ( $localStorage, $rootScope, $scope, $location, loginService ) {

		$scope.storage = $localStorage;
		console.log($localStorage.token)
		if ($localStorage.token) {
			$location.path( 'profile' )
		}

		$scope.submit = function() {
			$('.failed-sign-log').css('display', 'none');
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
						console.log( 'LOGIN CORRECT' );
						$rootScope.$broadcast('insertNameHeader', data.data.token);
						$location.path( 'profile' );
					} else if (data.data.success === false){
						console.log( 'LOGIN INCORRECT' );
						$location.path( 'login' );
						$('.failed-sign-log').css('display', 'block');
					}
				})
		}
	})