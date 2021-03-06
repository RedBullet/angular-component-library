const ComponentListComponent = {
  bindings: {
    components: '<',
    type: '<',
  },
  template: `
    <section ng-repeat="component in $ctrl.components" class="sg-component-list">
      <sg-component-detail
        name="{{component.name}}"
        docs="{{component.docs}}"
        variants=component.variants
        type="{{$ctrl.type}}"
        schema=component.schema
      ></sg-component-detail>
    </section>
  `
};

export default ComponentListComponent;
