const VariantComponent = {
  bindings: {
    name: '@',
    template: '@',
    markup: '@',
    data: '<',
  },
  template: `
    <div class="sg-variant">
      <h3 class="sg-variant__heading">{{$ctrl.name}}</h3>

      <div class="sg-variant__component" ng-include="$ctrl.template"></div>

      <div class="sg-variant__code">
        <pre><code class="html">{{$ctrl.markup}}</code></pre>
      </div>
    </div>
  `
};

export default VariantComponent;
