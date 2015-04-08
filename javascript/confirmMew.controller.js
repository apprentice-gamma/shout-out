angular.module('myApp.controllers')
	.controller("ConfirmMewController", function($scope, MewFactory, $routeParams){
		console.log($routeParams)
		$scope.user = MewFactory.get({user_id: $routeParams.id });
  		$scope.confirmation = "Your Mew has been Mewed!";
  		$scope.errorMessage = "Hiss! There has been an error in Mewing your Mew! Please try again soon.";
	})