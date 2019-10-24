'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('carroCompra').
  component('carroCompra', {
    templateUrl: 'carro-compra/carro-compra.template.html',
    controller: ['Phone','$scope','carritoServicio','$filter',
      function PhoneComparadorDetalleController(Phone,$scope,carritoServicio,$filter) {

        var self = this;

        self.telefonos = []; 
        self.telefonosOrdenados = [];
        self.telefonosContados = [];
        self.contador = 0;

        console.trace('carroCompraController');

        self.telefonos = carritoServicio.getAllProductos();

        self.getKeys() = function(tels){
          return Array.from(tels.keys());
      }
        

        
      }]
  });