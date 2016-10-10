import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SingleComponent from './single.component';
import StyleguideService from '../../styleguide.service';

const Single = angular
  .module('styleguide.single', [
    uiRouter,
  ])
  .component('styleguide.single', SingleComponent)
  .service('StyleguideService', StyleguideService)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('styleguide.single', {
        url: '/:type/:component',
        component: 'styleguide.single'
      });
  }])
  .name;

export default Single;
