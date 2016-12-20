import angular from 'angular';
import VariantsComponent from './variants.component';

const Variants = angular
  .module('styleguide.common.variants', [])
  .component('sgVariants', VariantsComponent)
  .name;

export default Variants;
