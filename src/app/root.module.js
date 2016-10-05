import angular from 'angular';

import Common from './common';
import Components from './components';
import RootComponent from './root.component';

const root = angular
  .module('root', [
    Common,
    Components,
  ])
  .component('root', RootComponent)
  .name;

export default root;
