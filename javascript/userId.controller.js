



angular.module('myApp.controllers')
	.controller("UserIdController", function($scope, $routeParams){
		$scope.all = [
			{_id: "2342343234",name:"McFluffyton Von Meowers"}, 
	  		{_id:"12324232",name: "Scratchers"},
	  		{_id:"0594593432",name:"Pretty Kitty"}
		];
		$scope.userId = $routeParams.id;
		//$scope.user =  "not working";//$scope.all[1].name

	  	for (var i = 0; i < $scope.all.length; i++) {
	  		if ($scope.all[i]._id === $scope.userId) {
	  			$scope.user = $scope.all[i].name;
	  		};
	  	};	
 	})