/**
 * Created by psuputsopon on 5/6/2559.
 */
(function () {
    'use strict';

    angular.module('myapp')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', '$http'];

    function UserController($scope, $http) {
        var vm = this;
        vm.users = [];
        vm.user_seleted = null;

        vm.selected = function (p) {
            vm.user_seleted = p;
            console.log(p);
        }

        $http({
            method: 'get',
            url: 'http://localhost:3000/api/v2/users'
        }).then(function (res) {
            // success
            if (res.status === 200) {
                vm.users = res.data.user;
            }

        }, function (res) {
            // error
            console.log(res.status);
        });

        /*$http.get('http://128.199.137.73:3000/api/v2/users')
         .success(function(res) {
         console.log(res);
         })
         .error(function(res){
         console.log(res);
         });*/
    };
}());
