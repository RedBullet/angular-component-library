import angular from 'angular';
import TabsComponent from './tabs.component';

const Tabs = angular
  .module('styleguide.common.sgTabs', [])
  .component('sgTabs', TabsComponent)
  .name;

export default Tabs;
