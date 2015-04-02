var myApp = angular.module("myApp", ["ngRoute", "myApp.controllers"]);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
      controller: "MainController",
      templateUrl: '../view/partials/index.html'
  });
  $routeProvider.when("/users", {
      controller: "UserController",
      templateUrl: '../view/partials/users_index.html'
   });
  $routeProvider.when("/mew/new", {
      controller: "MewController",
      templateUrl: '../view/partials/new_mew.html'
   });
  $routeProvider.when("/mew/confirm", {
      controller: "ConfirmMewController",
      templateUrl: '../view/partials/confirm_mew.html'
   });
   $routeProvider.otherwise({redirectTo: '/'});
}])
