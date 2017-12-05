'use strict';

angular.module('paraisoCiclistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueadero-create', {
        url: '/parqueadero-create',
        template: '<parqueadero-create></parqueadero-create>'
      });
  });
