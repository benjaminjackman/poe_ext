(function() {
  var FiltersCtrl, InventorySearchCtrl, module;
  module = angular.module('myApp', []);
  module.config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/inventory-search', {
        templateUrl: 'inventory-search.html',
        controller: 'InventorySearchCtrl'
      });
      return $routeProvider.otherwise({
        redirectTo: '/inventory-search'
      });
    }
  ]);
  module.controller("InventorySearchCtrl", InventorySearchCtrl = (function() {
    function InventorySearchCtrl($scope) {}
    return InventorySearchCtrl;
  })());
  module.controller("FiltersCtrl", FiltersCtrl = (function() {
    function FiltersCtrl($scope) {
      $scope.filter = {};
      $scope.filter.minValue = 40;
      $scope.filter.maxValue = 100;
      $scope.filter.min = 0;
      $scope.filter.max = 500;
    }
    return FiltersCtrl;
  })());
  module.directive('filterSlider', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        min: "=",
        max: "=",
        minValue: "=",
        maxValue: "="
      },
      template: "<div>\n  <input type=\"number\" ng-model=\"minValue\" style=\"width:50px\"/>\n  <slider min-value=\"minValue\" max-value=\"maxValue\" min=\"min\" max=\"max\" style=\"width: 160px;display: inline-block\"></slider>\n  <input type=\"number\" ng-model=\"maxValue\" style=\"width:50px\"/>\n</div>"
    };
  });
  module.directive('slider', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        min: "=",
        max: "=",
        minValue: "=",
        maxValue: "="
      },
      link: function(scope, el, attrs) {
        console.log(scope);
        scope.$watch('minValue', function(x) {
          return el.slider("option", "values", [+x, el.slider("values", 1)]);
        });
        scope.$watch('maxValue', function(x) {
          return el.slider("option", "values", [el.slider("values", 0), +x]);
        });
        scope.$watch('min', function(x) {
          return el.slider("option", "min", +x);
        });
        scope.$watch('max', function(x) {
          return el.slider("option", "max", +x);
        });
        return el.slider({
          range: true,
          min: scope.min,
          max: scope.max,
          values: [scope.minValue, scope.maxValue],
          slide: function(e, ui) {
            scope.minValue = ui.values[0];
            scope.maxValue = ui.values[1];
            return scope.$apply();
          }
        });
      },
      template: "<div></div>"
    };
  });
}).call(this);
