import angular from 'angular';
import NavBar from './nav-bar';

const Organisms = angular
  .module('organisms', [
    NavBar,
  ])
  .name;

export default Organisms;
