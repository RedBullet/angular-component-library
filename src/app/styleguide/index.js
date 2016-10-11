import angular from 'angular';
import uiRouter from 'angular-ui-router';
import hljs from 'angular-highlightjs';
import StyleguideComponent from './styleguide.component';
import StyleguideService from './styleguide.service';
import ComponentList from './common/component-list';
import ComponentDetail from './common/component-detail';
import Properties from './common/properties';
import Header from './common/header';
import Menu from './common/menu';
import Nav from './common/nav';
import Tabs from './common/tabs';
import All from './common/all';
import Single from './common/single';

const Styleguide = angular
  .module('styleguide', [
    uiRouter,
    hljs,
    Nav,
    Header,
    Menu,
    Tabs,
    ComponentList,
    ComponentDetail,
    All,
    Single,
  ])
  .component('styleguide', StyleguideComponent)
  .service('StyleguideService', StyleguideService)
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('styleguide', {
        abstract: true,
        component: 'styleguide',
        resolve: {
          types: ['StyleguideService', (StyleguideService) => {
            return StyleguideService.getData();
          }]
        },
      });
  }])
  .name;

export default Styleguide;
