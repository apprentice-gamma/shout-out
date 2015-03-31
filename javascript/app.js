var myApp = angular.module("myApp", ["ngRoute","ngResource"]);
myApp.config(function($routeProvider) {
  $routeProvider.when("/index", {
      templateUrl: '../view/partials/index.html'
  });
  $routeProvider.when("/users", {
      controller: "UserController as users",
      templateUrl: '../view/partials/users_index.html'
   });
})

myApp.controller("UserController", function(){
  this.all = [{name:"McFluffyton Von Meowers"}, {name: "Scratchers"},{name:"Pretty Kitty"}];
})
