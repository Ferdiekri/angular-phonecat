'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('carroCompra').
  component('carroCompra', {
    templateUrl: 'carro-compra/carro-compra.template.html',
    controller: ['Phone','$scope','carritoServicio','$filter',
      function CarroCompraController(Phone,$scope,carritoServicio,$filter) {

        var self = this;

        self.telefonos = [];
        self.suma = 0;

        console.trace('carroCompraController onInit()');
        self.telefonos = carritoServicio.getAllProductosArray();
        self.suma = carritoServicio.sumarPrecios();
        
      }]
  });