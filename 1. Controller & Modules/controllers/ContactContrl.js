(function () {
  'use strict';

  angular.module('myapp')
    .factory('singletonService', function () {
      var text = 'First Text';
      return {
        setText: function (text) {
           this.text = text;
        },
        getText: function () {
          return this.text;
        }
       };
    })
    .controller('testSingleton', function ($scope, singletonService) {
        $scope.showText = singletonService.getText();
        $scope.sendText = function (text) {
            singletonService.setText(text);
            $scope.showText = singletonService.getText();
        };

        $scope.receiveText = function () {
            $scope.showText = singletonService.getText();
        }
    });

}());
