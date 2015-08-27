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

addressBook.factory('apiService', function($http) {
  var api = {
    getPeople: function() {
      return $http.get('/api/people').then(function (response) {
        return response.data.people;
      });
    }
  };
  return api;
});