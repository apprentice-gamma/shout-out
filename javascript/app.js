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

function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    gapi.auth.signOut();
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}
