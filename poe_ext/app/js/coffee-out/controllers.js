(function() {
  var InventorySearchCtrl, global, module;
  global = window;
  module = angular.module("myApp.controllers", []);
  module.controller("InventorySearchCtrl", InventorySearchCtrl = (function() {
    function InventorySearchCtrl($scope) {
      $scope.filters = ['asdf'];
      $scope.addFilter = function() {
        return $scope.filters.push({});
      };
      $scope.remove = function(index) {
        return $scope.filters.splice(index, 1);
      };
    }
    return InventorySearchCtrl;
  })());
  module.controller("ImdbController", function($scope) {
    return $scope.years = "1950";
  });
}).call(this);
