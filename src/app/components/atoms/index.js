import angular from 'angular';
import Logo from './logo';

const Atoms = angular
  .module('atoms', [
    Logo,
  ])
  .name;

export default Atoms;
