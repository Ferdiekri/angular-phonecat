'use strict';

core
  .factory('carritoServicio',
    function() {

      // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map

      return {

        productos: new Map(),
        cantidad: 0,

        getAllProductos: function() {
            return this.producto;
        }, // getProducto()

        setProducto: function(p) {

          if( this.productos.get(p.id) ) {
            cantidad: this.productos.get(p.id);

            this.productos.set(p.id, cantidad+1);
            
          }else{
            this.productos.set(p.id, 1);
          }
        } // setProducto()

      }; //end return
    } // end function

  );