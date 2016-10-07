const ComponentListComponent = {
  bindings: {
    components: '<',
  },
  template: `
    <div ng-repeat="component in $ctrl.components">
      <sg-component-detail name="{{component.name}}" docs="{{component.docs}}"></sg-component-detail>
    </div>
  `
};

export default ComponentListComponent;
