/*global angular*/
angular.module('addressBook').controller('PersonViewCtrl', [
  '$scope',
  function($scope) {
  	$scope.foo = 'person';
  	console.log($scope.people);
  }
]);