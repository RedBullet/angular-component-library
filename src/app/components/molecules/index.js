import angular from 'angular';
import Alert from './alert';
import Hero from './hero';
import InputText from './input-text';
import ListInfo from './list-info';
import NavMenu from './nav-menu';

const Molecules = angular
  .module('components.molecules', [
    Alert,
    Hero,
    InputText,
    ListInfo,
    NavMenu,
  ])
  .name;

export default Molecules;
