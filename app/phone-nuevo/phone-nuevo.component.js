angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['Phone', '$scope', '$routeParams',
      function PhoneNuevoController(Phone, $scope, $routeParams) {
        console.trace('PhoneComparadorCardController');
        var self = this;  
                           
        self.form = {};

        let id = $routeParams.phoneId;
        if ( id  ) {   //buscar telefono por id

          Phone.getById(id).then(
            (res)=>{
              console.debug('telefono encontrado');
              self.form = res.data;
            },
            ()=>{
              console.warn('telefono NO encontrado');
            }
          );

        }
        
        self.guardar = function(movil){
            console.trace('click nuevo movil nombre: %o', movil.nombre);
            if(movil.nombre == undefined || movil.nombre == null){
                console.warn('No se ha introducido ningun valor');
            } else{
                let p = Phone.crear(movil);
                p.then(
                    response=>{
                        console.debug('Llamada Rest OK %o', response);
                    },
                    response=>{
                        console.warn('Llamada Rest ERROR %o', response);
                    }
                )
            }
        }

        

      }
    ]
})
