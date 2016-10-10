import StyleguideController from './styleguide.controller';

const StyleguideComponent = {
  controller: StyleguideController,
  template: `
    <sg-header types=$ctrl.data></sg-header>

    <main role="main" class="sg-styleguide">
      <div ng-repeat="type in $ctrl.data">
        <sg-component-list components=type.components type=type.type></sg-component-list>
      </div>
    </main>
  `
};

export default StyleguideComponent;
