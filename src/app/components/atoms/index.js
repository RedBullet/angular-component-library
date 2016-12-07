import angular from 'angular';
import Logo from './logo';
/* inject imports */

const Atoms = angular
  .module('atoms', [
    Logo,
    /* inject classNames */
  ])
  .name;

export default Atoms;
