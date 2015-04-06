angular.module('myApp.controllers')
	.controller("UserController", function($scope, $http, UserFactory){
	  	$scope.all = UserFactory.query();
		$scope.go = function ( path ) {
  			$location.path( path );
  		}
	})

//$scope.oneUser = UserFactory.get({user:userId})