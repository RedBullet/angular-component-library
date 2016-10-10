const ComponentListComponent = {
  bindings: {
    components: '<',
    type: '<',
  },
  template: `
    <section ng-repeat="component in $ctrl.components" class="sg-component-list">
      <sg-component-detail name="{{component.name}}" docs="{{component.docs}}" type="{{$ctrl.type}}"></sg-component-detail>
    </section>
  `
};

export default ComponentListComponent;
