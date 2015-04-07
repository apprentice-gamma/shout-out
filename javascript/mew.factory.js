angular.module('myApp.factory', [])
	.factory("MewFactory", function($resource) {
		return $resource ('https://project1-backend.herokuapp.com/api/users/:user_id/shoutouts/', 
			{user_id: '@user_id'});

	});