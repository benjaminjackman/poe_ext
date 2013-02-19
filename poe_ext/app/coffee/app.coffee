module = angular.module('myApp', [])

module.config(['$routeProvider', ($routeProvider) ->
    $routeProvider.when('/inventory-search', {templateUrl: 'inventory-search.html', controller: 'InventorySearchCtrl'});
    $routeProvider.otherwise({redirectTo: '/inventory-search'});
  ]);

module.controller "InventorySearchCtrl", class InventorySearchCtrl
  constructor: ($scope) ->

module.controller "FiltersCtrl", class FiltersCtrl
  constructor: ($scope) ->
    $scope.filter = {}
    $scope.filter.minValue = 40
    $scope.filter.maxValue = 100
    $scope.filter.min = 0
    $scope.filter.max = 500

module.directive 'filterSlider', () ->
  {
    restrict: 'E'
    replace: true
    scope: {
      min:"="
      max:"="
      minValue:"="
      maxValue:"="
    }
    template: """
              <div>
                <input type="number" ng-model="minValue" style="width:50px"/>
                <slider min-value="minValue" max-value="maxValue" min="min" max="max" style="width: 160px;display: inline-block"></slider>
                <input type="number" ng-model="maxValue" style="width:50px"/>
              </div>
              """
  }

module.directive 'slider', () -> {
  restrict: 'E'
  replace: true
  scope: {
    min:"="
    max:"="
    minValue:"="
    maxValue:"="
  }
  link: (scope, el, attrs) ->
    console.log(scope)

#    attrs.$observe 'minValue', (x) -> el.slider("option", "values", [+x, el.slider("values", 1)])
    scope.$watch 'minValue', (x) -> el.slider("option", "values", [+x, el.slider("values", 1)])
    scope.$watch 'maxValue', (x) -> el.slider("option", "values", [el.slider("values", 0), +x])
    scope.$watch 'min', (x) -> el.slider("option", "min", +x)
    scope.$watch 'max', (x) -> el.slider("option", "max", +x)



    el.slider {
      range: true
      min: scope.min
      max: scope.max
      values:[scope.minValue, scope.maxValue]
      slide: (e, ui) ->
#        attrs.$set 'minValue', ui.values[0]
        scope.minValue = ui.values[0]
        scope.maxValue = ui.values[1]
        scope.$apply();
    }

  template:"<div></div>"
}