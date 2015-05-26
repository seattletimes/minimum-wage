//Use CommonJS style via browserify to load other modules
require("./lib/social");
require("./lib/ads");
require("angular");

var app = angular.module("minimum-wage", []);

app.controller("CityController", ["$scope", function($scope) {
  $scope.cities = cityData;
}]);