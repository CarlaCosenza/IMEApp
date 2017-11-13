// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])

    .run(function($ionicPlatform, $firebaseArray) {
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
                StatusBar.overlaysWebView(false);
                StatusBar.backgroundColorByHexString('021f54');
                StatusBar.styleLightContent();

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
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('app.horarios', {
                url: '/horarios',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/horarios.html',
                        controller: 'MediaCtrl'
                    }
                }
            })

            .state('app.mapa', {
                url: '/mapa',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/mapa.html',
                        controller: 'MapaCtrl'
                    }
                }
            })

            .state('app.escala', {
                url: '/escala',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/escala.html',
                        controller: 'EscalaCtrl'
                    }
                }
            })

            .state('app.escaladia', {
                url: '/escaladia',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/escaladia.html',
                        controller: 'EscalaDiaCtrl'
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

            .state('app.informaçoes', {
                url: '/informaçoes',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/informaçoes.html'
                    }
                }
            })

            .state('app.taf', {
                url: '/taf',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/taf.html',
                        controller: 'TAFController'
                    }
                }
            })

            .state('app.1_masc', {
                url: '/1_masc',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/1_masc.html'
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
            })

            .state('app.faleconosco', {
                url: '/faleconosco',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/faleconosco.html',
                        controller: 'FaleConoscoCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
