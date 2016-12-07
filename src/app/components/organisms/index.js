import angular from 'angular';
import NavBar from './nav-bar';
import Page from './page';
import Panel from './panel';
/* inject imports */

const Organisms = angular
  .module('organisms', [
    NavBar,
    Page,
    Panel,
    /* inject classNames */
  ])
  .name;

export default Organisms;
