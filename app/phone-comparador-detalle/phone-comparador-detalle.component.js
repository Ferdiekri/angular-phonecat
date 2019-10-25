'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparadorDetalle').
  component('phoneComparadorDetalle', {
    templateUrl: 'phone-comparador-detalle/phone-comparador-detalle.template.html',
    bindings: {
      telefono1: '=',
      telefono2: '=',
      probando: "@"
    },
    controller: ['Phone','$scope','carritoServicio',
      function PhoneComparadorDetalleController(Phone,$scope,carritoServicio) {

        var self = this;
        //self.mostrar = false;

        console.trace('PhoneComparadorDetalleController');

        this.onInit = function() {
          console.trace('PhoneComparadorDetalleController onInit()');
          self.flash = 0;
          self.ram = 0;
          self.mostrar = true;
        } // onInit()


      self.comprar = function() {
        carritoServicio.setProducto(self.telefono1);
        $scope.$emit("eventoCompra", { telefono: self.telefono1 });
      } // comprar()    
        
      }]
  });