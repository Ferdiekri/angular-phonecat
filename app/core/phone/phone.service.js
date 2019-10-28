'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$http',  function($http) {

     let service = {};
     let endpoint = "http://localhost:3000/phones/";

     service.getAll = function(){      
        console.trace('GET ' + endpoint);
        return $http.get(endpoint);
     }

      service.getById = function( id ){
        console.trace("Entramos en el getById")
        let url = endpoint + id;
        console.trace('GET ' + url);
        return $http.get(url);
      }

      service.eliminar = function( id ){
        console.trace("Entramos en el eliminar")
        let url = endpoint + id;
        console.trace('DELETE ' + url);
        return $http.delete(url);
      }

      service.crear = function(movil){
        let url = endpoint;
        console.trace('POST ' + endpoint);
        let body = {"age": movil.age, 
                    "id":movil.id, 
                    "name":movil.nombre,
                    "imageUrl":movil.imageUrl,
                    "snippet":movil.snippet,
                    "android":{
                      "os": movil.android
                    },
                    "camera": {
                      "primary": movil.primary
                    },
                    "connectivity": {
                      "cell": movil.cell,
                      "gps": movil.gps,
                      "infrared": movil.infrared,
                      "wifi": movil.wifi
                    },
                    "display": {
                      "touchScreen":movil.touchScreen
                    },
                    "hardware": {
                      "accelerometer": movil.accelerometer,
                      "fmRadio": movil.fmRadio,
                      "physicalKeyboard": movil.physicalKeyboard
                    },
                    "storage":{
                        "flash":movil.flash,
                        "ram":movil.ram
                    }};
        return $http.post(url,body);
      }

      return service;
    }
  ]);