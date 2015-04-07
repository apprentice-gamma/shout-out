angular.module('myApp.controllers')
	.controller("MewController", function($scope, $location, UserFactory, $routeParams){
		$scope.user = UserFactory.get({user_id: $routeParams.id});
		var defaultMew = "What are you mewing about?!";
  		$scope.message = "Make a Mew";
  		$scope.mewComment = defaultMew;  		
		$scope.go = function ( path ) {
  		$location.path( path );
};

	})