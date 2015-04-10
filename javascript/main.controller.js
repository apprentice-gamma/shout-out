angular.module('myApp.controllers', [])
	.controller("MainController", function($scope, UserFactory){
  		$scope.message = "An App to Give Recognition to Your Colleagues";
  		$scope.recentUsers = []
  		UserFactory.query().$promise.then(function(data) {
  			var recentUsers = []
  			data.forEach(function(user,index){

  				if (index >=10 && user.shoutouts.length > 0) {
  					recentUsers.push(user);
  				}

  			})
  			$scope.recentUsers = recentUsers;
  		})
  		// allUsers.forEach(function(user) {
  		// 		console.log(user);
  		// })
	})
