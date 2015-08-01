angular.module('shortly.shorten', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider
  .when('/shorten', {
    templateUrl: 'app/shorten/shorten.html',
    controller: 'ShortenController'
  })
  $routeProvider
  .otherwise({
    redirectTo: '/shorten'
  })
})

.controller('ShortenController', function ($scope, $location, AddLinks) {
  $scope.link = {};
  $scope.addLink = function(){};
});
