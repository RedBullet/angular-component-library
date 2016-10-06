import angular from 'angular';
import NavMenuComponent from './nav-menu.component';

const NavMenu = angular
  .module('components.molecules.navMenu', [])
  .component('navMenu', NavMenuComponent)
  .name;

export default NavMenu;
