import angular from 'angular';
import ExampleTemplate from './example-template';

const Templates = angular
  .module('templates', [
    ExampleTemplate,
  ])
  .name;

export default Templates;
