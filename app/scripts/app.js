'use strict';

// angular.module('app.user.controllers', []);

// var webAdminApp = angular.module('foodOrderingProjectApp', [
//   'app.user.services', //login, reset password etc
// ]);

/**
 * @ngdoc overview
 * @name foodOrderingProjectApp
 * @description
 * # foodOrderingProjectApp
 *
 * Main module of the application.
 */
angular
  .module('foodOrderingProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider', 
    function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('main', {
        abstract : true,
        url: '',
        views: {
            'header': {
                templateUrl: 'index-header.html'
            },
            'content': {
                templateUrl: 'index-content.html'
            },
            'footer': {
                templateUrl: 'index-footer.html'
            }
        }
        // controllerAs: 'main'
      })
      .state('main.home', {
        url: "/home",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        // controllerAs: 'about'
      })
      .state('main.about', {
        url: "/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
        // controllerAs: 'about'
      });
      // .otherwise({
      //   redirectTo: '/'
      // });
  }]);
