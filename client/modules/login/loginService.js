angular.module( 'loginService', [ ] )
	.factory('loginService', function( $http ) {
		function login( user ) {
			return $http.post( '/api/authenticate', user )
		}
		return {
			login: login
		}
	})