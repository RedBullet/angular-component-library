import angular from 'angular';
import Properties from '../properties';
import ComponentDetailComponent from './component-detail.component';

const ComponentDetail = angular
  .module('styleguide.common.component-detail', [
    Properties,
  ])
  .component('sgComponentDetail', ComponentDetailComponent)
  .name;

export default ComponentDetail;
