var myApp = angular.module("myApp", ["ngRoute", "myApp.controllers", "ngResource", "myApp.factory"]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
      controller: "MainController",
      templateUrl: '../view/partials/index.html'
  });
  $routeProvider.when("/users", {
      controller: "UserController",
      templateUrl: '../view/partials/users_index.html'
   });
  $routeProvider.when("/users/:id", {
      controller: "UserIdController",
      templateUrl: '../view/partials/users_show.html'
   });  
  $routeProvider.when("/users/:id/mew/new", {
      controller: "MewController",
      templateUrl: '../view/partials/new_mew.html'
   });
  $routeProvider.when("/users/:id/mew", {
      controller: "ConfirmMewController",
      templateUrl: '../view/partials/confirm_mew.html'
   });
   $routeProvider.otherwise({redirectTo: '/'});
}])

 myApp.config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });