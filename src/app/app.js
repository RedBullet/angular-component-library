import angular from 'angular';

import Components from './components';
import AppComponent from './app.component';
import Styleguide from './styleguide';

const root = angular
  .module('root', [
    Components,
    Styleguide,
  ])
  .component('root', AppComponent)
  .name;

export default root;
