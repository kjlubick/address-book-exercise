/*global angular*/
angular.module('addressBook').controller('indexCtrl', [
  '$scope', 'apiService',
  function($scope, apiService) {
    apiService.getPeople().then(function(response) {
      $scope.people = response;

      $scope.person = $scope.people[0];
    });
    
  }
]);
