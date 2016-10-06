import angular from 'angular';
import NavBar from './nav-bar';
import Page from './page';
import Panel from './panel';

const Organisms = angular
  .module('organisms', [
    NavBar,
    Page,
    Panel,
  ])
  .name;

export default Organisms;
