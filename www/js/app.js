// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      ionic.Platform.fullScreen(true, true);
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
    // Remove back button text completely
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.horarios', {
      url: '/horarios',
      views: {
        'menuContent': {
          templateUrl: 'templates/horarios.html'
        }
      }
    })

  .state('app.iniciativas', {
      url: '/iniciativas',
      views: {
        'menuContent': {
          templateUrl: 'templates/iniciativas.html'
        }
      }
    })

  .state('app.roboime', {
      url: '/roboime',
      views: {
        'menuContent': {
          templateUrl: 'templates/roboime.html',
          controller: 'RoboIMECtrl'
        }
      }
    })

    .state('app.sobre', {
      url: '/sobre',
      views: {
        'menuContent': {
          templateUrl: 'templates/sobre.html'
        }
      }
    })  .state('app.escala', {
      url: '/escala',
      views: {
        'menuContent': {
          templateUrl: 'templates/escala.html'
        }
      }
    })

    .state('app.faleconosco', {
        url: '/faleconosco',
        views: {
            'menuContent': {
              templateUrl: 'templates/faleconosco.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
