'use strict';

/**
 * @ngdoc function
 * @name tatuaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tatuaApp
 */
angular.module('tatuaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
