/**
 * Created by psuputsopon on 5/6/2559.
 */
(function () {
    'use strict';
    angular.module('myapp')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope'];

    function SignupController($scope) {
        var vm = this;
        vm.user = {};

        vm.onsubmit = function (valid) {
            if (valid) {
                console.log('submiting');
            } else {
                console.log('can not submit');
            }
        }
    }

}());
