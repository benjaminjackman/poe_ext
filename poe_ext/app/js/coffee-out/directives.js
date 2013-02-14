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
  module.directive('jqSlider', function() {
    return function($scope, elm, attrs) {
      return elm.slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
          $scope.years = ui.values[0];
          return $scope.$apply();
        }
      });
    };
  });
}).call(this);
