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

var clientId = '1020993763919-rf8poji82eh4na7ik9nu2bu3nj2smq7n.apps.googleusercontent.com';
      // Enter the API key from the Google Develoepr Console - to handle any unauthenticated
      // requests in the code.
      // The provided key works for this sample only when run from
      // https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
      // To use in your own application, replace this API key with your own.
      var apiKey = 'AIzaSyB1ZId3uqsEGv-qcv7GU2UwXuez4JPwX6w';
      // To enter one or more authentication scopes, refer to the documentation for the API.
      var scopes = 'https://www.googleapis.com/auth/plus.me';
      // Use a button to handle authentication the first time.
      function handleClientLoad() {
        gapi.client.setApiKey(apiKey);
        window.setTimeout(checkAuth,1);
      }
      function checkAuth() {
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
      }
      function handleAuthResult(authResult) {
        var authorizeButton = document.getElementById('authorize-button');
        if (authResult && !authResult.error) {
          authorizeButton.style.visibility = 'hidden';
          makeApiCall();
        } else {
          authorizeButton.style.visibility = '';
          authorizeButton.onclick = handleAuthClick;
        }
      }
      function handleAuthClick(event) {
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
        return false;
      }
      // Load the API and make an API call.  Display the results on the screen.
      function makeApiCall() {
        gapi.client.load('plus', 'v1', function() {
          var request = gapi.client.plus.people.get({
            'userId': 'me'
          });
          request.execute(function(resp) {
            var heading = document.createElement('h4');
            var image = document.createElement('img');
            image.src = resp.image.url;
            heading.appendChild(image);
            heading.appendChild(document.createTextNode(resp.displayName));
            document.getElementById('content').appendChild(heading);
          });
        });
      }
