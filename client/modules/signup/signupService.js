angular.module( 'signupService', [ ] )
	.factory('signupService', function( $http ) {
		function signup( user ) {
			console.log('service signup')
			return $http.post( '/new-user', user )
		}
		return {
			signup: signup
		}
	})