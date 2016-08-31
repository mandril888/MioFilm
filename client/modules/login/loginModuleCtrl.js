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
					//if login OK, saves token and set user credentials in $rootScope.credentials
					// authenticationService.saveToken( data.data.token );
					// authenticationService.setCredentials();
					console.log( 'LOGIN CORRECT' );
					$location.path( 'myprofile' );
				})
				.catch( function( err ) {
					//if login fails, removes token
					// authenticationService.logout();
					console.log(err)
					console.log('LOGIN ERROR' );
					$location.path( 'login' );
				})
		}
	})