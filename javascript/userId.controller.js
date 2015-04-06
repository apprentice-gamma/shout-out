angular.module('myApp.controllers')
	.controller("UserIdController", function($scope, $routeParams, UserFactory){
		$scope.user = UserFactory.get({user_id: $routeParams.id});
	})