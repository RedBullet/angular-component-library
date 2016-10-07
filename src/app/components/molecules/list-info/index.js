import angular from 'angular';
import ListInfoComponent from './list-info.component';

const ListInfo = angular
  .module('components.molecules.listInfo', [])
  .component('listInfo', ListInfoComponent)
  .name;

export default ListInfo;
