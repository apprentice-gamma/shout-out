angular.module('myApp.controllers')
	.controller("MewController", function($scope, $location, UserFactory, $routeParams, MewFactory, $timeout){
		$scope.user = UserFactory.get({user_id: $routeParams.id});

  		$scope.message = "Give a Mew to ";
  		$scope.shout = {'text':"What are you mewing about?!"};
  		$scope.redirect = function() {
  			$location.path('/users/' + $routeParams.id)
  		}  		
		$scope.go = function () {
			$scope.shout.user_id = $routeParams.id;
			MewFactory.save($scope.shout);
	  		$timeout($scope.redirect, 1000);
		};

	})