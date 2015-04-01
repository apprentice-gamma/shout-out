angular.module('myApp.controllers')
	.controller("MewController", function($scope){
		$scope.validate = function($scope.mewComment){
			var mew = mewComment.trim();
			if (mew != "" && mew != "What are you mewing about?!"){
				$scope.mewSet=true;
			}
		}
		$scope.mewSet = false;
  		$scope.message = "Make a Mew";
  		$scope.mewComment = "What are you mewing about?!";
	
	})