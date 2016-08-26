angular.module( 'config', [ ] )
	.config( function( $routeProvider ){
			$routeProvider
				.when('/',{
					templateUrl: 'modules/home/home.html'
				})
				.when('/home',{
					templateUrl: 'modules/home/home.html'
				})
				.when('/specifications/:FILMID',{
					templateUrl: 'modules/specifications/specifications.html'
				})
				// .when('/about',{
				// 	templateUrl: 'modules/about/about.html',
				// 	controller: 'aboutModuleCtrl'
				// })
				.otherwise({ redirectTo: '/' }); ;
	})