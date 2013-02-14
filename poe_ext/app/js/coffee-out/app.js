(function() {
  var module;
  module = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);
  module.config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/inventory-search', {
        templateUrl: 'templates/inventory-search.html',
        controller: 'InventorySearchCtrl'
      });
      return $routeProvider.otherwise({
        redirectTo: '/inventory-search'
      });
    }
  ]);
}).call(this);
