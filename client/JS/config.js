angular.module( 'config', [ ] )
	.config( function( $routeProvider ){
			$routeProvider
				.when('/',{
					templateUrl: 'client/modules/home/home.html',
					// controller: 'homeController'
				})
				.when('/home',{
					templateUrl: 'client/modules/home/home.html',
					// controller: 'homeController'
				})
				.when('/specifications/:FILMID',{
					templateUrl: 'client/modules/specifications/specifications.html'
				})
				// .when('/about',{
				// 	templateUrl: 'modules/about/about.html',
				// 	controller: 'aboutModuleCtrl'
				// })
				.otherwise({ redirectTo: '/' }); ;
	})