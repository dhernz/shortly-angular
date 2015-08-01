angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, PostLinks) {
  $scope.link = {};
  $scope.addLink = function(){
    PostLinks.postLink().then(function(link){
      $scope.link = link;
    });
  };
});
