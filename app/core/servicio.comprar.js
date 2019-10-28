'use strict';

core
  .factory('carritoServicio', ['Phone',
    function(Phone) {

      return {

        productos: new Map(),
        productosArray: [],

        getAllProductos: function() {
           console.trace('getAllProductos: %o', this.productos);
            return this.productos;
        }, // getAllProductos()

        getAllProductosArray: function() {
          console.trace('getAllProductosArray: %o', this.productos);
          return Array.from(this.productos.values());
        }, // getAllProductosArray()

        eliminarProducto: function(idTel) {
          console.trace('eliminarProducto');
          this.productos.delete(idTel);
          

        }, // eliminarProducto()


        sumarPrecios: function() {
          console.trace('sumarPrecios: %o', this.productos);
          var suma = 0;

          Array.from(this.productos.values()).forEach(element => {
            suma += (element.telefono.precio * element.cantidad );
          });

          return suma;
        }, // sumarPrecios()

        setProducto: function(p) {
          var cantidad = 0;
          console.trace('setProducto');

          if( this.productos.get(p.id) != undefined ) {
            cantidad = this.productos.get(p.id).cantidad;

            //this.productos.set(p.id, cantidad+1);
            this.productos.get(p.id).cantidad++;
            
          }else{
            //this.productos.set(p.id, 1);
            this.productos.set(p.id, {"cantidad": 1, "telefono": p});
          }

        }, // setProducto()

      }; //end return
    } // end function

  ]);