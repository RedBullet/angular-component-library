import angular from 'angular';
import NavBarComponent from './nav-bar.component';

const NavBar = angular
  .module('components.organisms.navBar', [])
  .component('navBar', NavBarComponent)
  .name;

export default NavBar;
