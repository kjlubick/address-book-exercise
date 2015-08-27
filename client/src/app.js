/*global angular*/
var addressBook = angular.module('addressBook', 
	['ngRoute']);

addressBook.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'indexCtrl'
    });
  }
]);