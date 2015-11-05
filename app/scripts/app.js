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

angular.module('app.restaurant.services',[]);

angular
  .module('foodOrderingProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'app.restaurant.services'
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
      })
      .state('main.contact', {
        url: "/contact",
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
        // controllerAs: 'about'
      })

      .state('restaurant', {
        abstract : true,
        url: '/restaurant',
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
      })
      .state('restaurant.list', {
        url: "/restaurant_list/:currentLocation",
        templateUrl: 'modules/restaurant/restaurant-list.tpl.html',
        controller: 'RestaurantListCtrl'
      })
      .state('restaurant.menu', {
        url: "/restaurant_menu/:currentLocation/:restaurantName",
        templateUrl: 'modules/restaurant/restaurant-menu.tpl.html',
        controller: 'RestaurantMenuCtrl'
      });
      // .otherwise({
      //   redirectTo: '/'
      // });
  }])
  .config(["$httpProvider", 
    function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
