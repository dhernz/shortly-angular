angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    Links.addLinks().then(function(link){
      $scope.link = link;
    });
  };
});
