angular.module('myApp.controllers', [])
	.controller("MainController", function($scope){
  		$scope.confirmation = "Your Mew has been Mewed!";
  		$scope.errorMessage = "Hiss! There has been an error in Mewing your Mew! Please try again soon.";
	})