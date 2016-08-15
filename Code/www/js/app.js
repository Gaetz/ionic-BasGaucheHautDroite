// angular.module is a global place for creating, registering and retrieving Angular modules
var app = angular.module('memebattle', ['ionic','btford.socket-io'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider)
{

  $stateProvider
  .state('chat', {
    url: "/chat/:nickname",
    templateUrl: "templates/emiter.html"
  })
  .state('recepter', {
    url: "/recepter/:nickname",
    templateUrl: "templates/recepter.html"
  })
  .state('config', {
    url: "/config",
    templateUrl: "templates/config.html"
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/config');
})