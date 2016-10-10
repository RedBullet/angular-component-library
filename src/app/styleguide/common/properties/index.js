import angular from 'angular';
import PropertiesComponent from './properties.component';

const Properties = angular
  .module('styleguide.common.properties', [])
  .component('sgProperties', PropertiesComponent)
  .name;

export default Properties;
