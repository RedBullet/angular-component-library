import angular from 'angular';
import InputTextComponent from './input-text.component';

const InputText = angular
  .module('components.molecules.inputText', [])
  .component('inputText', InputTextComponent)
  .name;

export default InputText;
