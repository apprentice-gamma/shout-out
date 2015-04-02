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
  $routeProvider.when("/users/:id", {
      controller: "UserIdController",
      templateUrl: '../view/partials/users_show.html'
   });  
  $routeProvider.when("/mew/new", {
      controller: "MewController",
      templateUrl: '../view/partials/new_mew.html'
   });
   $routeProvider.otherwise({redirectTo: '/'});
}])


/*myApp.controller("MewController", function($scope){
  $scope.message = "Make a Mew";
  $scope.mewComment = "What are you mewing about?!";
})*/
