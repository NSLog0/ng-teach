(function () {
  'use strict';

  angular
    .module('myapp')
    .controller('ContactContrl', ContactContrl);

  ContactContrl.$inject = ['$scope'];

  function ContactContrl($scope) {
    $scope.user = {};
  }

}());
