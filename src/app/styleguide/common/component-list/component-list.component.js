const ComponentListComponent = {
  bindings: {
    components: '<',
  },
  template: `
    <div ng-repeat="component in $ctrl.components">
      <sg-component-detail name="{{component.name}}"></sg-component-detail>
    </div>
  `
};

export default ComponentListComponent;
