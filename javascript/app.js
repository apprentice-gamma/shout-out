var myApp = angular.module("myApp", ["ui-router"]);
myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("userslist", {
      url: '/users',
      controller: "UserController as users",
      templateUrl: '../partials/user_index.html'
   });
})

myApp.controller("UserController", function(){
  this.all = [{name:"McFluffyton Von Meowers"}, {name: "Scratchers"},{name:"Pretty Kitty"}];
})
