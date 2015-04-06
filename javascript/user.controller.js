angular.module('myApp.controllers')
	.controller("UserController", function($scope, $http, UserFactory){
	  	 $http.get('http://project1-backend.herokuapp.com/api/users').then (function ($scope) {
			$scope.all = result.data;
		}
		) 
		$scope.go = function ( path ) {
  			$location.path( path );
  		}
	})

