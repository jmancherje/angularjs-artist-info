var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {

  $scope.author = {
    'name': 'Justin Mancherje',
    'title': 'Awesome Stuff',
    'company': 'self employed'
  }

});