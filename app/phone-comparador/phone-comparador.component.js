'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone','$scope','carritoServicio',
      function PhoneComparadorController(Phone, $scope,carritoServicio) {

        var self = this;

        console.trace('PhoneComparadorController');
        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';
        self.mostrar = false;
        self.listado = [];

        this.seleccionar = function(phone){
          console.trace('seleccionar()');
           
          if (Object.keys(self.phone1).length === 0) {
            console.trace('Llenamos phone1');
            self.phone1 = phone;
          }else {
            console.trace('Llenamos phone2');
            self.phone2 = self.phone1;
            self.phone1 = phone;
          }
          self.mostrar = true;
        } // seleccionar()

        self.listadoCarrito = function(){
          return carritoServicio.getAllProductos();
        }

        $scope.$on("eventoCompra", function(event, data){
          alert("eventoCompra en padre: " + data.telefono.id);
          self.listado = carritoServicio.getAllProductos();
        });
        
      }]
  });