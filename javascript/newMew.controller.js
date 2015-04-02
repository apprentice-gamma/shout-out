angular.module('myApp.controllers')
	.controller("MewController", function($scope, $location){
		var defaultMew = "What are you mewing about?!";
  		$scope.message = "Make a Mew";
  		$scope.mewComment = defaultMew;  		
		$scope.go = function ( path ) {
  		$location.path( path );
};

	})