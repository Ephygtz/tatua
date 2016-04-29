'use strict';

/**
 * @ngdoc function
 * @name tatuaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tatuaApp
 */
angular.module('tatuaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
