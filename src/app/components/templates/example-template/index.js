import angular from 'angular';
import ExampleTemplateComponent from './example-template.component';

const ExampleTemplate = angular
  .module('components.atoms.exampleTemplate', [])
  .component('exampleTemplate', ExampleTemplateComponent)
  .name;

export default ExampleTemplate;
