/*global angular*/
angular.module('addressBook').controller('indexCtrl', [
  '$scope', 'apiService',
  function($scope, apiService) {
    apiService.getPeople().then(function(response) {
      $scope.people = response;

      $scope.setSelected = function(person) {
        $scope.person = person;
      };

      $scope.setSelected($scope.people[0]);

    });
    
  }
]);
