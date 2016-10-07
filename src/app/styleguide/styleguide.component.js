import StyleguideController from './styleguide.controller';

const StyleguideComponent = {
  controller: StyleguideController,
  template: `
    <main>
      <div ng-repeat="type in $ctrl.data">
        <h2>{{type.type}}</h2>
        <sg-component-list components=type.components></sg-component-list>
      </div>
    </main>
  `
};

export default StyleguideComponent;
