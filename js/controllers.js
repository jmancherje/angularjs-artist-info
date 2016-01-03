var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {

  // use http service to get data from json file.
  // running app through live-server to prevent 
  // chrome cross-origin policy problems
  $http.get('js/data.json').success(function (data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });

}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function (data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.artists.length - 1;
    }

    if ($routeParams.itemId > $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }
  });
}]);