import angular from 'angular';
import Alert from './alert';
import NavMenu from './nav-menu';

const Molecules = angular
  .module('components.molecules', [
    Alert,
    NavMenu,
  ])
  .name;

export default Molecules;
