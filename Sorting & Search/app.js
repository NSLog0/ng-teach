(function () {
  'use strict';
angular.module('myapp',[]);

angular.module('myapp').config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
}());
