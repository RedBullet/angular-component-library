import uiRouter from 'angular-ui-router';
import loadingBar from 'angular-loading-bar';
import AppComponent from './app/app.component';

const common = angular
  .module('common', [
    uiRouter,
    loadingBar,
  ])
  .component('app', AppComponent)
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app'
      });
  }])
  .run(['$transitions', 'cfpLoadingBar', function ($transitions, cfpLoadingBar) {
    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  }])
  .name;

export default common;
