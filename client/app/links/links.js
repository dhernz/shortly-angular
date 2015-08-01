angular.module('shortly.links', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider
    .when('/links',{
      templateUrl: 'app/links/links.html',
      controller: 'LinksController'
    })

    $routeProvider.otherwise({
      redirectTo: '/links'
    })
})

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){};

  Links.getLinks().then(function(url){
    $scope.data.links = url;
  })
});

