angular.module( 'headerModuleCtrl', [ ] )
	.controller( 'headerController' , function ( $localStorage, $scope ) {

		$scope.storage = $localStorage;

		if ($localStorage.token) { // || tokenRecived
			$('#hi-user').css('display', 'block')
			var infoToken = parseJwt($localStorage.token);
			$scope.hiUserName = infoToken._doc.name;
		}

		$scope.$on('insertNameHeader', function(evt, message){
			$('#hi-user').css('display', 'block')
			var infoToken = parseJwt(message);
			$scope.hiUserName = infoToken._doc.name;
		})

		$scope.$on('insertNameHeader2', function(evt, message){
			$('#hi-user').css('display', 'block')
			var infoToken = parseJwt(message);
			$scope.hiUserName = infoToken._doc.name;
		})

		function parseJwt (token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse(window.atob(base64));
		};

	})