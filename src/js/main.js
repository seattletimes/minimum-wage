//Use CommonJS style via browserify to load other modules
require("./lib/social");
require("./lib/ads");
require("angular");

var app = angular.module("minimum-wage", []);

require("./flip")(app); //mix in our directive

app.controller("CityController", ["$scope", function($scope) {
  $scope.when = "";
  $scope.cities = cityData;

  $scope.sortCities = function() {
    $scope.cities.sort(function(a,b) {
      return (a["percent" + $scope.when] * 1) - (b["percent" + $scope.when] * 1);
    });
  };
  $scope.setWhen = function(when) {
    if ($scope.when !== when) {
      $scope.when = when;
      $scope.sortCities();
    }
  };

  $scope.sortCities();
}]);