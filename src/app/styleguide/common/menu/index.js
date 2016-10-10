import angular from 'angular';
import MenuComponent from './menu.component';

const Menu = angular
  .module('styleguide.common.sgMenu', [])
  .component('sgMenu', MenuComponent)
  .name;

export default Menu;
