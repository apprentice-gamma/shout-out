angular.module('myApp.controllers')
	.controller("UserController", function($scope){
	  	$scope.all = [
	  		{_id: "2342343234",name:"McFluffyton Von Meowers"}, 
	  		{_id:"12324232",name: "Scratchers"},
	  		{_id:"0594593432",name:"Pretty Kitty"}
	  	];
	})
