import angular from 'angular';
import uiRouter from 'angular-ui-router';
import StyleguideComponent from './styleguide.component';
import StyleguideService from './styleguide.service';
import ComponentList from './common/component-list';
import ComponentDetail from './common/component-detail';
import Properties from './common/properties';
import Header from './common/header';
import Menu from './common/menu';
import Nav from './common/nav';
import Tabs from './common/tabs';

const Styleguide = angular
  .module('styleguide', [
    uiRouter,
    Nav,
    Header,
    Menu,
    Tabs,
    ComponentList,
    ComponentDetail,
    Properties,
  ])
  .component('styleguide', StyleguideComponent)
  .service('StyleguideService', StyleguideService)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('styleguide', {
        url: '/',
        component: 'styleguide'
      });
    $urlRouterProvider.otherwise('/');
  }])
  .name;

export default Styleguide;
