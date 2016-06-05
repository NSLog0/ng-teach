(function (){
  'use strict';
   angular.module('ngRest',[]);
   angular.module('ngRest').provider('rest_api', function() {
    // In the provider function, you cannot inject any
    // service or factory. This can only be done at the
    // "$get" method.
    this.name = '.';
    this.$get = function($http) {
       var name = this.name;
       var data = [{"name":"Billy Williams","email":"bwilliams0@apple.com","job":"Actuary","skill":"PDF Creator","pic":"https://robohash.org/eanostrumincidunt.jpg?size=120x120\u0026set=set1"},
       {"name":"Steven Frazier","email":"sfrazier1@pinterest.com","job":"Design Engineer","skill":"NC-Verilog","pic":"https://robohash.org/repudiandaeomnisest.bmp?size=120x120\u0026set=set1"},
       {"name":"Doris Clark","email":"dclark2@uol.com.br","job":"Nurse Practicioner","skill":"Axis","pic":"https://robohash.org/providentvoluptateet.png?size=120x120\u0026set=set1"},
       {"name":"Wayne Schmidt","email":"wschmidt3@omniture.com","job":"Nurse","skill":"Avaya AES","pic":"https://robohash.org/voluptatedoloresdolorum.bmp?size=120x120\u0026set=set1"},
       {"name":"Andrea Wagner","email":"awagner4@wix.com","job":"Sales Representative","skill":"Karate","pic":"https://robohash.org/evenietrepellendusducimus.bmp?size=120x120\u0026set=set1"}];
       return {
         path: function() {
          return name;
        },
        showName: function(){
          var _r = [];
          data.forEach(function(val){
             _r.push(val.name);
          });
          return _r;
        }
       }
    };
    this.setpath = function(name) {
       this.name = name;
    };
});

 angular.module('ngRest').directive('showName', function() {
   var directive = {
     restrict: 'EA',
     scope: {
       name: '='
     },
     template:'<ul><li ng-repeat="n in name">{{::n}}</li></ul>'
   }

   return directive;
 });
}());
