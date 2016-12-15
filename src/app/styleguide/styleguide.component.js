import StyleguideController from './styleguide.controller';

const StyleguideComponent = {
  bindings: {
    types: '<',
    isolated: '<',
  },
  template: `
    <sg-header types=$ctrl.types ng-if="!$ctrl.isolated"></sg-header>

    <main role="main" class="sg-styleguide" ng-class="{'sg-styleguide--isolated': $ctrl.isolated}">
      <div ui-view></div>
    </main>
  `
};

export default StyleguideComponent;
