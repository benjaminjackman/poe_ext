(function() {
  var module;
  module = angular.module('myApp.directives', []);
  module.directive('appVersion', [
    'version', function(version) {
      return function(scope, elm, attrs) {
        return elm.text(version);
      };
    }
  ]);
  module.directive('slider', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        min: "@",
        max: "@",
        minValue: "=",
        maxValue: "="
      },
      link: function(scope, el, attrs) {
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
          min: attrs.min,
          max: attrs.max,
          values: [attrs.minValue, attrs.maxValue],
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
