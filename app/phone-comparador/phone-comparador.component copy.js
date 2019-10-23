'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparadorDetalle').
  component('phoneComparadorDetalle', {
    templateUrl: 'phone-comparador-detalle/phone-comparador-detalle.template.html',
    bindings: {
      telefono1: '@',
      telefono2: '@'
    },
    controller: ['Phone',
      function PhoneComparadorDetalleController(Phone) {


        var self = this;

        console.trace('PhoneComparadorDetalleController');
        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';
        self.flash1 = 0;
        self.flash2 = 0;
        self.ram1 = 0;
        self.ram2 = 0;
        self.mostrar = false;

        this.seleccionar = function(phone){
          console.trace('seleccionar()');

          if( self.phone1 === phone ){
            self.phone1 = {};
          }else if ( self.phone2 === phone ){
            self.phone2 = {};
          }else {         
          
            if (Object.keys(self.phone1).length === 0) {
              console.trace('Llenamos phone1');
              self.phone1 = phone;
            }else {
              console.trace('Llenamos phone2');
              self.phone2 = self.phone1;
              self.phone1 = phone;
            }

            if( (Object.keys(self.phone1).length != 0) && (Object.keys(self.phone2).length != 0) ){
              self.comparar();
            }
          }
          
            
            
        } // seleccionar()

        this.comparar = function(){
          console.trace('comparar()');

          self.flash1 = self.phone1.flash - self.phone2.flash;
          self.ram1 = self.phone1.ram - self.phone2.ram;
          self.flash2 = self.phone2.flash - self.phone1.flash;
          self.ram2 = self.phone2.ram - self.phone1.ram;

          self.mostrar = true;

        } // comparar()
      }
    ]
  });
