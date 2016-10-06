import angular from 'angular';
import uiRouter from 'angular-ui-router';
import StyleguideComponent from './styleguide.component';
import StyleguideService from './styleguide.service';
import Nav from './common/nav';
import ComponentList from './common/component-list';
import ComponentDetail from './common/component-detail';

const Styleguide = angular
  .module('styleguide', [
    uiRouter,
    Nav,
    ComponentList,
    ComponentDetail,
  ])
  .component('styleguide', StyleguideComponent)
  .service('StyleguideService', StyleguideService)
  .config(/*@ngInject*/ ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('styleguide', {
        url: '/styleguide',
        component: 'styleguide'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default Styleguide;
