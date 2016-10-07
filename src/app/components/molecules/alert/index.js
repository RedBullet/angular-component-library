import angular from 'angular';
import AlertComponent from './alert.component';

const Alert = angular
  .module('components.molecules.alert', [])
  .component('alert', AlertComponent)
  .name;

export default Alert;
