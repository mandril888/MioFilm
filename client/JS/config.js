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
				.when('/signup',{
					templateUrl: 'modules/signup/signup.html',
					controller: 'signupController'
				})
				.when('/profile',{
					templateUrl: 'modules/profile/profile.html',
					controller: 'profileController'
				})
				.otherwise({ redirectTo: '/' }); ;
	})