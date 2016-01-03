var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function ($scope, $http) {

  // use http service to get data from json file.
  // running app through live-server to prevent 
  // chrome cross-origin policy problems
  $http.get('js/data.json').success(function (data) {
    $scope.artists = data;
    // $scope.artistOrder = 'name';
  });

}]);