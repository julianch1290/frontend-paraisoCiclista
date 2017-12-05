'use strict';
(function(){

class ParqueaderoCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('paraisoCiclistaApp')
  .component('parqueaderoCreate', {
    templateUrl: 'app/parqueadero/parqueadero-create/parqueadero-create.html',
    controller: ParqueaderoCreateComponent
  });

})();
