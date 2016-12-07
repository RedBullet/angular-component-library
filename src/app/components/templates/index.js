import angular from 'angular';
import ExampleTemplate from './example-template';
/* inject imports */

const Templates = angular
  .module('templates', [
    ExampleTemplate,
    /* inject classNames */
  ])
  .name;

export default Templates;
