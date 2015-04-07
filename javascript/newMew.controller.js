angular.module('myApp.controllers')
	.controller("MewController", function($scope, $location, UserFactory, $routeParams){
		$scope.user = UserFactory.get({user_id: $routeParams.id});
		$scope.shout = {};
		console.log($scope.user)
		// var defaultMew = "What are you mewing about?!";
  		$scope.message = "Give a Mew to ";
  		// $scope.mewComment = defaultMew;  		
		$scope.go = function ( path ) {
			$scope.shout = angular.copy($scope.shout);
			console.log($scope.shout);
	  		// $location.path( path );

		};

	})