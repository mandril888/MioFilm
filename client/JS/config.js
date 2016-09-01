angular.module( 'config', [ ] )
	.config( function( $routeProvider ){
			$routeProvider
				.when('/',{
					templateUrl: 'modules/home/home.html',
				})
				.when('/home',{
					templateUrl: 'modules/home/home.html',
				})
				.when('/specifications/:FILMID',{
					templateUrl: 'modules/specifications/specifications.html',
					controller: 'specificationsController'
				})
				.when('/login',{
					templateUrl: 'modules/login/login.html',
					controller: 'loginController'
				})
				.when('/signin',{
					templateUrl: 'modules/signin/signin.html',
					controller: 'signinController'
				})
				.when('/profile',{
					templateUrl: 'modules/profile/profile.html',
					controller: 'profileController'
				})
				.otherwise({ redirectTo: '/' }); ;
	})