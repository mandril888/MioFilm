angular.module( 'config', [ ] )
	.config( function( $routeProvider ){
			$routeProvider
				.when('/',{
					templateUrl: 'client/modules/home/home.html',
				})
				.when('/home',{
					templateUrl: 'client/modules/home/home.html',
				})
				.when('/specifications/:FILMID',{
					templateUrl: 'client/modules/specifications/specifications.html',
					controller: 'specificationsController'
				})
				.when('/login',{
					templateUrl: 'client/modules/login/login.html',
					controller: 'loginController'
				})
				// .when('/signin',{
				// 	templateUrl: 'client/modules/signin/signin.html',
				// 	controller: 'signinController'
				// })
				.otherwise({ redirectTo: '/' }); ;
	})