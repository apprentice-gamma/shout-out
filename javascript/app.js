var myApp = angular.module("myApp", ["ui-router"]);
myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("userslist", {
      url: '/users',
      controller: "UserContrller as users",
      templateUrl: '../partials/user_index.html'
   });
})
