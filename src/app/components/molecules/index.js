import angular from 'angular';
import Alert from './alert';
import Hero from './hero';
import InputText from './input-text';
import ListInfo from './list-info';
import NavMenu from './nav-menu';
import Box from './box';

const Molecules = angular
  .module('components.molecules', [
    Alert,
    Hero,
    InputText,
    ListInfo,
    NavMenu,
    Box,
  ])
  .name;

export default Molecules;
