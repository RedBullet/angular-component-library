import angular from 'angular';
import ComponentDetailComponent from './component-detail.component';

const ComponentDetail = angular
  .module('styleguide.common.component-detail', [])
  .component('sgComponentDetail', ComponentDetailComponent)
  .name;

export default ComponentDetail;
