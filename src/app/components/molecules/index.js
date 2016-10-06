import angular from 'angular';
import NavMenu from './nav-menu';

const Molecules = angular
  .module('molecules', [
    NavMenu,
  ])
  .name;

export default Molecules;
