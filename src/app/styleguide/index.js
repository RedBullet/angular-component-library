import angular from 'angular';
import uiRouter from 'angular-ui-router';
import StyleguideComponent from './styleguide.component';
import StyleguideService from './styleguide.service';
import Nav from './common/nav';
import ComponentList from './common/component-list';
import ComponentDetail from './common/component-detail';
import Properties from './common/properties';

const Styleguide = angular
  .module('styleguide', [
    uiRouter,
    Nav,
    ComponentList,
    ComponentDetail,
    Properties,
  ])
  .component('styleguide', StyleguideComponent)
  .service('StyleguideService', StyleguideService)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('styleguide', {
        url: '/styleguide',
        component: 'styleguide'
      });
    $urlRouterProvider.otherwise('/');
  }])
  .name;

export default Styleguide;
