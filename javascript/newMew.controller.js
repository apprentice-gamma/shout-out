angular.module('myApp.controllers')
	.controller("MewController", function($scope){
		var defaultMew = "What are you mewing about?!";
  		$scope.message = "Make a Mew";
  		$scope.mewComment = defaultMew;
  		
  		$scope.nonEmpty=/^(.+)$/i;

  		$scope.isItEmpty = function(mewComment){
			var mew = mewComment;
			console.log(mew.test(nonEmpty));
			if (mew.test(nonEmpty))
				return true;
			else
				return false;

		};
	})