angular.module('myApp.factory')
	.factory('UserFactory', function($resource) {
		return $resource ('https://project1-backend.herokuapp.com/api/users/:user_id', {user_id: '@user_id'});
	});