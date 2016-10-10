import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AllComponent from './all.component';
import StyleguideService from '../../styleguide.service';

const All = angular
  .module('styleguide.all', [
    uiRouter,
  ])
  .component('styleguide.all', AllComponent)
  .service('StyleguideService', StyleguideService)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('styleguide.all', {
        url: '/',
        component: 'styleguide.all'
      });
  }])
  .name;

export default All;
