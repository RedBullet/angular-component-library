import angular from 'angular';
import Atoms from './atoms';
import Molecules from './molecules';
import Organisms from './organisms';
import Templates from './templates';

const Components = angular
  .module('components', [
    Atoms,
    Molecules,
    Organisms,
    Templates,
  ])
  .name;

export default Components;
