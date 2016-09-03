angular.module( 'signinService', [ ] )
	.factory('signinService', function( $http ) {
		function signin( user ) {
			console.log('service signin')
			return $http.post( '/new-user', user )
		}
		return {
			signin: signin
		}
	})