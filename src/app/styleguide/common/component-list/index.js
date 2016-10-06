import angular from 'angular';
import ComponentListComponent from './component-list.component';

const ComponentList = angular
  .module('styleguide.common.component-list', [])
  .component('sgComponentList', ComponentListComponent)
  .name;

export default ComponentList;
