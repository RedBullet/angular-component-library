import angular from 'angular';
import LogoComponent from './logo.component';

const Logo = angular
  .module('components.atoms', [])
  .component('logo', LogoComponent)
  .name;

export default Logo;
