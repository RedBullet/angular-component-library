import angular from 'angular';

import Common from './common';
import Components from './components';
import RootComponent from './root.component';
import Styleguide from './styleguide';

const root = angular
  .module('root', [
    Common,
    Components,
    Styleguide,
  ])
  .component('root', RootComponent)
  .name;

export default root;
