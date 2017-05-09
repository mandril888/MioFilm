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
			.when('/profile/to-see',{
				templateUrl: 'modules/toSee/toSee.html',
				controller: 'toSeeController'
			})
			.otherwise({ redirectTo: '/' }); ;
	})

	//Update Angular configuration section
	.config(function (BackandProvider) {
		BackandProvider.setAppName('miofilm');
		BackandProvider.setSignUpToken('367278f0-0329-4f4c-8f5a-a5632b9d9211');
		BackandProvider.setAnonymousToken('6fcf7b38-c1f9-46ac-a738-1bc843a4188a');
	})
