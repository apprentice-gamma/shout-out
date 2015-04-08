var myApp = angular.module("myApp", ["ngRoute", "myApp.controllers", "ngResource", "myApp.factory"]);

myApp.config(function($routeProvider) {
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
  $routeProvider.when("/mew/confirm", {
      controller: "ConfirmMewController",
      templateUrl: '../view/partials/confirm_mew.html'
   });
   $routeProvider.otherwise({redirectTo: '/'});
})

function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}


 // myApp.config(function($httpProvider) {
 //      //Enable cross domain calls
 //      $httpProvider.defaults.useXDomain = true;

 //      //Remove the header used to identify ajax call  that would prevent CORS from working
 //      delete $httpProvider.defaults.headers.common['X-Requested-With'];
 //  });