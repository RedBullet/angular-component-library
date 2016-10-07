import angular from 'angular';
import HeroComponent from './hero.component';

const Hero = angular
  .module('components.molecules.hero', [])
  .component('hero', HeroComponent)
  .name;

export default Hero;
