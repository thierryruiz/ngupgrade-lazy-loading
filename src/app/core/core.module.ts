import 'angular';
import 'angular-ui-router';

declare const angular: any;

export const module = angular.module('AngularJSApp', ['ui.router']);

module.config(($locationProvider: any, $stateProvider: any) => {
  $locationProvider.html5Mode(true);

  $stateProvider.state('core', {
    url: '/core',
    templateUrl : './core.html',
    onEnter : () => {
      console.log( "Enter CORE angularjs");
    }
  });

  $stateProvider.state('sink', {
    url: '/*path',
    template: ''
  });
});

module.run(($rootScope: any) => {
  console.log('Running AngularJS application');

  $rootScope.$on('$stateChangeStart', (e: any, toState: any, toParams: any) => {
    console.log('$stateChangeStart', toState, toParams);
  });
});
