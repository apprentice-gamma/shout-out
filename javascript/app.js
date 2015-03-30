var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function($stateProvider) {
  $stateProvider.state("index", {
      url:"",
      templateUrl: '../view/partials/index.html'
  });
  $stateProvider.state("users", {
      url: '/users',
      controller: "UserController as users",
      templateUrl: '../view/partials/users_index.html'
   });
})

myApp.controller("UserController", function($scope){
  $scope.all = [{name:"McFluffyton Von Meowers"}, {name: "Scratchers"},{name:"Pretty Kitty"}];
})
