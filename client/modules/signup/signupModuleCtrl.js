angular.module( 'signupModuleCtrl', [ ] )
	.controller( 'signupController' , function ( $localStorage, $rootScope, $scope, $location, signupService ) {

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
			signupService.signup( user )
				.then( function( data ) {
					console.log(data)
					if (data.data.success === true) {
						$scope.storage.token = data.data.token;
						console.log( 'signup CORRECT' );
						$rootScope.$broadcast('insertNameHeader2', data.data.token);
						$location.path( 'home' );
					} else if (data.data.success === false){
						console.log( 'signup INCORRECT' );
						$location.path( 'signup' );
						$('.failed-sign-log').css('display', 'block');
					}
				})
		}
	})