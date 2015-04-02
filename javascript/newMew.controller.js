angular.module('myApp.controllers')
	.controller("MewController", function($scope){
		var defaultMew = "What are you mewing about?!";
  		$scope.message = "Make a Mew";
  		$scope.mewComment = defaultMew;  		
	})