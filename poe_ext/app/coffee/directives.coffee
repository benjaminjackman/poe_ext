module = angular.module('myApp.directives', [])

module.directive 'appVersion', ['version', (version) ->
  (scope, elm, attrs) ->
    elm.text(version)
]

module.directive 'jqSlider', () ->
  ($scope, elm, attrs) ->
    elm.slider {
      range: true
      min: 0
      max: 500
      values: [75,300]
      slide: (event, ui) ->
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $scope.years = ui.values[0];
        $scope.$apply();
    }
#
#`angular.directive('jq-slider', function() {
#    return function(elm) {
#      var currentScope = this;
#      elm.slider({
#            range: true,
#            min: 0,
#            max: 500,
#            values: [ 75, 300 ],
#            slide: function( event, ui ) {
#                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
#                currentScope.years = ui.values[0];
#                currentScope.$apply();
#            }
#        });
#    };
#});
#`