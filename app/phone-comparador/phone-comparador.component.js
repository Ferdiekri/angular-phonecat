'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone',
      function PhoneComparadorController(Phone) {

        var self = this;

        console.trace('PhoneComparadorController');
        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';
        self.mostrar = false;

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
          
        } // seleccionar()
      }
    ]
  })
  .directive("ipComparar",[function() {
     
    var directiveDefinitionObject ={
      restrict:"E",
      replace : false,
      template:"<span class=\"{{ (v1 < v2)?'text-danger':( (v1 > 0)?'text-success':'text-info') }}\">{{ v1-v2 }}</span>",
      scope:{
        v1:"=",
        v2:"="
      },
      link:function(scope, iElement, iAttrs, controller, transcludeFn) {
        /*var htmlColor;
        var resta = (+scope.v1)-(+scope.v2);

        if ( resta > 0 ) {
          htmlColor="green";
        }else if( resta < 0 ){
          htmlColor="red";
        }else{
          htmlColor="teal";
        }

        iElement.css("background-color",htmlColor);*/
      }
    }    
    return directiveDefinitionObject;
  }]);
