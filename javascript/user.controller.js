angular.module('myApp.controllers')
	.controller("UserController", function($scope){
	  	$scope.all = UserFactory.query();
		$scope.go = function ( path ) {
  			$location.path( path );
  		}
	})

