import angular from 'angular';
import <%= componentClassName %>Component from './<%= componentNameHyph %>.component';

const <%= componentClassName %> = angular
  .module('components.<%= type %>.<%= componentName %>', [])
  .component('<%= componentName %>', <%= componentClassName %>Component)
  .name;

export default <%= componentClassName %>;
