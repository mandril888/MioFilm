angular.module( 'loginModuleCtrl', [ ] )
	.controller( 'loginController' , function ( $scope, $location, loginService ) {

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