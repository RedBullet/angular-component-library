import angular from 'angular';
import Atoms from './atoms';
import Molecules from './molecules';
import Organisms from './organisms';

const Components = angular
  .module('components', [
    Atoms,
    Molecules,
    Organisms,
  ])
  .name;

export default Components;
