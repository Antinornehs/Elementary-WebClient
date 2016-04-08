'use strict';

angular.module('myApp.tableOfTypes', ['ngRoute'])

.config(['$routeProvider' , function($routeProvider) {
  $routeProvider.when('/tableOfTypes', {
    templateUrl: 'tableOfTypes/tableOfTypes.html',
    controller: 'typesController'
  });
}])

.controller('typesController', [ '$scope','$http',
        function($scope, $http) {
            $http.get('resources/Types.json').success(function(data) {
                $scope.types = data.Types;
            });

            $scope.getLogos = function ($weakness) {
                var logo_path = 'resources/logo/' + $weakness +'_32x32.svg';
                return logo_path;
            }
}]);
