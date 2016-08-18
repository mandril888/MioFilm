angular.module( 'config', [ ] )
	.config( function( $routeProvider ){
			$routeProvider
				.when('/',{
					templateUrl: 'modules/home/home.html',
					controller: 'homeController'
				})
				.when('/home',{
					templateUrl: 'modules/home/home.html',
					controller: 'homeController'
				})
				.when('/specifications/:FILMID',{
					templateUrl: 'modules/specifications/specifications.html',
					controller: 'specificationsController'
				})
				.when('/about',{
					templateUrl: 'modules/about/about.html',
					controller: 'aboutController'
				})
				.otherwise({ redirectTo: '/' }); ;
	})