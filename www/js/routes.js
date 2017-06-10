angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.riderCircle', {
    url: '/rides',
    views: {
      'tab6': {
        templateUrl: 'templates/riderCircle.html',
        controller: 'riderCircleCtrl'
      }
    }
  })

  .state('tabsController.composeYourStory', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/composeYourStory.html',
        controller: 'composeYourStoryCtrl'
      }
    }
  })
  .state('tabsController.login', {
    url: '/login',
    views: {
      'tab5': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('tabsController.register', {
    url: '/login',
    views: {
      'tab5': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/home/rides')

  

});