angular.module( 'signinModuleCtrl', [ ] )
	.controller( 'signinController' , function ( $scope, $location, signinService ) {

		$scope.submit = function() {
			var user = {
				userName: $scope.userName,
				userPassword: $scope.userPassword
			}
			console.log('User: '+user.userName+' '+user.userPassword)
			signinService.signin( user )
				.then( function( data ) {
					console.log(data)
					if (data.data.success === true) {
						console.log( 'SIGNIN CORRECT' );
						$location.path( 'myprofile' );
					} else if (data.data.success === false){
						console.log( 'SIGNIN INCORRECT' );
						$location.path( 'signin' );
						$('.failed-signin').css('display', 'block');
					}
				})
		}
	})