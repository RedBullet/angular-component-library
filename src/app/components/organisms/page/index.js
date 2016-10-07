import angular from 'angular';
import PageComponent from './page.component';

const Page = angular
  .module('components.organisms.page', [])
  .component('page', PageComponent)
  .name;

export default Page;
