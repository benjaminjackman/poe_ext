module = angular.module('myApp.directives', [])

module.directive 'appVersion', ['version', (version) ->
  (scope, elm, attrs) ->
    elm.text(version)
]

module.directive 'slider', () -> {
  restrict: 'E'
  replace: true
  scope: {
    min:"@"
    max:"@"
    minValue:"="
    maxValue:"="
  }
  link: (scope, el, attrs) ->

#    attrs.$observe 'minValue', (x) -> el.slider("option", "values", [+x, el.slider("values", 1)])
    scope.$watch 'minValue', (x) -> el.slider("option", "values", [+x, el.slider("values", 1)])
    scope.$watch 'maxValue', (x) -> el.slider("option", "values", [el.slider("values", 0), +x])
    scope.$watch 'min', (x) -> el.slider("option", "min", +x)
    scope.$watch 'max', (x) -> el.slider("option", "max", +x)

    el.slider {
      range: true
      min: attrs.min
      max: attrs.max
      values:[attrs.minValue, attrs.maxValue]
      slide: (e, ui) ->
#        attrs.$set 'minValue', ui.values[0]
        scope.minValue = ui.values[0]
        scope.maxValue = ui.values[1]
        scope.$apply();
    }

  template:"<div></div>"
}
