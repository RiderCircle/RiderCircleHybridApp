angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.riderCircle', {
    url: '/page5',
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

$urlRouterProvider.otherwise('/page1/page5')

  

});