import angular from 'angular';
import NavComponent from './nav.component';

const Nav = angular
  .module('styleguide.common.sgNav', [])
  .component('sgNav', NavComponent)
  .name;

export default Nav;
