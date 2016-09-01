angular.module( 'signinService', [ ] )
	.factory('signinService', function( $http ) {
		function signin( user ) {
			return $http.post( '/new-user', user )
		}
		return {
			signin: signin
		}
	})