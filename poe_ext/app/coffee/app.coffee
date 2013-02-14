module = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])

module.config(['$routeProvider', ($routeProvider) ->
    $routeProvider.when('/inventory-search', {templateUrl: 'templates/inventory-search.html', controller: 'InventorySearchCtrl'});
    $routeProvider.otherwise({redirectTo: '/inventory-search'});
  ]);