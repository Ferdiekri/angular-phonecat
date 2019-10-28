'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone','$scope','carritoServicio',
      function PhoneComparadorController(Phone, $scope,carritoServicio) {

        var self = this;
        self.phones = [];

        console.trace('PhoneComparadorController');
        self.phones =
          Phone.getAll().then( 
            function successCallback(response) {
              console.trace("Success");
              self.phones = response.data;
            },
            function errorCallback(response) {
              console.warn("Error");
            }
          );

        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';
        self.mostrar = false;
        self.listado = [];
        self.carrito = [];

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

        /*self.listadoCarrito = function(){
          console.trace('listadoCarrito');
          return carritoServicio.getAllProductos();
        }*/

        $scope.$on("eventoCompra", function(event, data){
          //alert("eventoCompra en padre: " + data.telefono.id);
          console.trace('eventoCompra: %o', self.carrito);
          self.carrito = carritoServicio.getAllProductos()
        });
        
      }]
  });

  angular.module('phoneComparador').filter('filtroTelefonos', function () {
    return function( items, attr, min, max){
      console.log('filtroTelefonos attr=%s  min=%s max=%s', attr, min, max );

      if ( items ){

        return items.filter((telefono)=> {
          let value = telefono[attr];
          console.debug("telefono=%s value=%s min%s max=%s", telefono.id, value, min, max );
          return value >= min && value <= max ;
        });

      }  

      // return items;
    }
  });