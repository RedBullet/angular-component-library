const VariantsComponent = {
  bindings: {
    variants: '<',
  },
  template: `
    <section class="sg-variants">
      <sg-variant name="{{property.name}}" template="{{property.template}}" markup="{{property.markup}}" data=property.data ng-repeat="(key, property) in $ctrl.variants"></div>
    </section>
  `
};

export default VariantsComponent;
