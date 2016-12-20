import angular from 'angular';
import VariantComponent from './variant.component';

const Variant = angular
  .module('styleguide.common.variant', [])
  .component('sgVariant', VariantComponent)
  .name;

export default Variant;
