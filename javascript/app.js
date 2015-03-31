var myApp = angular.module("myApp", ["ngRoute"]);
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
   $routeProvider.otherwise({redirectTo: '/'});
}])
myApp.controller("MainController", function($scope){
  $scope.message = "Welcome to meower where we like to cat";
})
myApp.controller("UserController", function($scope){
  $scope.all = [{name:"McFluffyton Von Meowers"}, {name: "Scratchers"},{name:"Pretty Kitty"}];
})
myApp.controller("MewController", function($scope){
  $scope.message = "Make a Mew";
  $scope.mewComment = "What are you mewing about?!";
})
