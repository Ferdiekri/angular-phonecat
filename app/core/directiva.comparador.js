/**
 * 
 */
core.directive("ipComparar",[function() {
     
    var directiveDefinitionObject ={
      restrict:"E",
      replace : false,
      template:"<span class=\"{{ (v1 < v2)?'text-danger':( (v1 > 0)?'text-success':'text-info') }}\"><strong>{{ v1-v2 }} Mb.</strong></span>",
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
