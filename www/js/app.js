// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.login', {
    url: '/login',
    views: {
     
        templateUrl: 'templates/login.html'
        
    }
  })
  .state('tab.registro', {
    url: '/registro',
    views: {
     
        templateUrl: 'templates/registro.html'
        
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.numeros', {
      url: '/numeros',
      views: {
        'tab-listado': {
          templateUrl: 'templates/numeros.html',
          controller: 'numerosctr'
        }
      }
    })
    .state('tab.ubicacion', {
      url: '/ubicacion',
      views: {
        'tab-ubicacion': {
          templateUrl: 'templates/ubicacion.html',
          controller: 'numerosctr'
        }
      }
    })

    .state('tab.noticias', {
      url: '/noticias',
      views: {
        'tab-noticias': {
          templateUrl: 'templates/noticias.html',
          controller: 'noticiasctr'
        }
      }
    })

    .state('tab.cat_noti', {
      url: '/cat_noti',
      views: {
        'tab-noticias': {
          templateUrl: 'templates/cat_noti.html',
          controller: 'noticiasctr'
        }
      }
    })

    .state('tab.configuracion', {
      url: '/configuracion',
      views: {
        'tab-configuracion': {
          templateUrl: 'templates/configuracion.html',
          controller: 'noticiasctr'
        }
      }
    })

    .state('tab.det_noti', {
      url: '/det_noti',
      views: {
        'tab-noticias': {
          templateUrl: 'templates/det_noti.html',
          controller: 'noticiasctr'
        }
      }
    })

    .state('tab.denuncias', {
      url: '/denuncias',
      views: {
        'tab-denuncias': {
          templateUrl: 'templates/denuncias.html',
          controller: 'numerosctr'
        }
      }
    })
    .state('tab.pqr', {
      url: '/pqr',
      views: {
        'tab-pqr': {
          templateUrl: 'templates/pqr.html',
          controller: 'pqrctr'
        }
      }
    })
    .state('tab.acercade', {
      url: '/acercade',
      views: {
        'tab-acercade': {
          templateUrl: 'templates/acercade.html',
          controller: 'acercadectr'
        }
      }
    })

    

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/numeros');

});
