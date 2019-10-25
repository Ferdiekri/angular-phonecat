'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
module('phoneDetail').
component('phoneDetail', {
  templateUrl: 'phone-detail/phone-detail.template.html',
  controller: ['$routeParams', 'Phone', '$location',
    function PhoneDetailController($routeParams, Phone, $location) {
      var self = this;

      self.phone = null;

      Phone.getById($routeParams.phoneId).then(
        function successCallback(response) {
          console.trace("Success");
          self.phone = response.data;
          self.setImage(self.phone.images[0]);
        },
        function errorCallback(response) {
          console.warn('Error 404: Phone Not Found %o', response);
          $location.url('/404');
        }
      );

      self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
      };
    }
  ]
});