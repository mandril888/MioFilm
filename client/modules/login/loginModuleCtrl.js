angular.module( 'loginModuleCtrl', [ ] )
	.controller( 'loginController' , function ( $scope, $location, loginService ) {

		$scope.submit = function() {
			var user = {
				userName: $scope.userName,
				userPassword: $scope.userPassword
			}
			console.log('B: '+user.userName+' '+user.userPassword)
			loginService.login( user )
				.then( function( data ) {
					console.log(data)
					if (data.length > 0) {
						console.log( 'LOGIN CORRECT' );
						$location.path( 'myprofile' );
					} else {
						console.log( 'LOGIN INCORRECT' );
						$location.path( 'login' );
					}
				})
		}
	})