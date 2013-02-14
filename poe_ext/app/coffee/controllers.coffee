global = window

module = angular.module("myApp.controllers", [])

module.controller "InventorySearchCtrl", class InventorySearchCtrl
  constructor: ($scope) ->
    $scope.filters = ['asdf']
    $scope.addFilter = () -> $scope.filters.push({})
    $scope.remove = (index) -> $scope.filters.splice(index,1)

module.controller "ImdbController", ($scope) -> $scope.years = "1950"