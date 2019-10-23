'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparadorDetalle').
  component('phoneComparadorDetalle', {
    templateUrl: 'phone-comparador-detalle/phone-comparador-detalle.template.html',
    bindings: {
      telefono1: '=',
      telefono2: '=',
      probando: "<"
    },
    controller: ['Phone',
      function PhoneComparadorDetalleController(Phone) {

        var self = this;

        console.trace('PhoneComparadorDetalleController');

        this.onInit = function() {
          console.trace('PhoneComparadorDetalleController onInit()');
          self.flash = 0;
          self.ram = 0;
          self.mostrar = false;
        } // onInit()

        /*
        this.onChanges = function(changes){
          self.flash = self.telefono1.flash - self.telefono2.flash;
          self.ram = self.telefono1.ram - self.telefono2.ram;

          self.mostrar = true;
        } // onChanges()
        

      if (self.telefono2.name != undefined) {
          self.mostrar = true;
      }
*/
      this.comprar = function() {
        self.probando = "¡Hola padre!";

      } // comprar()
    
        
      }]
  });