// create the module and name it scotchApp
var app = angular.module('rjApp', ['ngRoute']);


app.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl : 'pages/home.html',
        controller : 'mainController'
      })

      .when('/about', {
        templateUrl : 'pages/about.html',
        controller : 'aboutController'
      })

      .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller : 'contactController'
      });
});
// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {

  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});


app.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

app.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});