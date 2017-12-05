'use strict';
(function(){

class ParqueaderoListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('paraisoCiclistaApp')
  .component('parqueaderoList', {
    templateUrl: 'app/parqueadero/parqueadero-list/parqueadero-list.html',
    controller: ParqueaderoListComponent
  });

})();
