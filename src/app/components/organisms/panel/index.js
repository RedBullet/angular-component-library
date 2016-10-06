import angular from 'angular';
import PanelComponent from './panel.component';

const Panel = angular
  .module('components.organisms.panel', [])
  .component('panel', PanelComponent)
  .name;

export default Panel;
