angular.module('myApp.factory', [])
	.factory("UserFactory", function($resource, $http) {
		return $http.get('https://project1-backend.herokuapp.com/api/users').then (function ($scope) {
			scope.users = result.data;
		}
		) 
	});