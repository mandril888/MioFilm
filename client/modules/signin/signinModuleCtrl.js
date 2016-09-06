angular.module( 'signinModuleCtrl', [ ] )
	.controller( 'signinController' , function ( $localStorage, $scope, $location, signinService ) {

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
			signinService.signin( user )
				.then( function( data ) {
					console.log(data)
					if (data.data.success === true) {
						$scope.storage.token = data.data.token;
						console.log( 'SIGNIN CORRECT' );
						$location.path( 'myprofile' );
					} else if (data.data.success === false){
						console.log( 'SIGNIN INCORRECT' );
						$location.path( 'signin' );
						$('.failed-sign-log').css('display', 'block');
					}
				})
		}
	})