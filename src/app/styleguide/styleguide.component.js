import StyleguideController from './styleguide.controller';

const StyleguideComponent = {
  bindings: {
    types: '<',
  },
  template: `
    <sg-header types=$ctrl.types></sg-header>

    <main role="main" class="sg-styleguide">
      <div ui-view></div>
    </main>
  `
};

export default StyleguideComponent;
