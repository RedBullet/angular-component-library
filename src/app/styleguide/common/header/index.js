import angular from 'angular';
import HeaderComponent from './header.component';

const Header = angular
  .module('styleguide.common.sgHeader', [])
  .component('sgHeader', HeaderComponent)
  .name;

export default Header;
