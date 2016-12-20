class ComponentDetailController {
  constructor($log) {
    this.$log = $log;
  }
  callback() {
    this.$log.info(arguments);
  }
}

ComponentDetailController.$inject = ['$log'];

const ComponentDetailComponent = {
  bindings: {
    name: '@',
    docs: '@',
    variants: '<',
    schema: '<',
    type: '@',
    isolated: '@',
  },
  controller: ComponentDetailController,
  template: `
    <section class="sg-component-detail">
      <div ng-if="$ctrl.isolated !== 'true'">
        <header class="sg-component-detail__header">
          <a ui-sref="styleguide.single({type: $ctrl.type, component: $ctrl.name, isolated: true})" target="_blank" class="sg-component-detail__header__link">Open isolated</a>
          <h2 class="sg-component-detail__subtitle">{{$ctrl.type}}</h2>
          <h1 class="sg-component-detail__title">{{$ctrl.name}}</h1>
        </header>

        <div class="sg-component-detail__variants" ng-if="$ctrl.variants.length > 0">
          <sg-variants variants=$ctrl.variants></sg-variants>
        </div>

        <div class="sg-component-detail__properties" ng-if="$ctrl.schema">
          <sg-properties properties=$ctrl.schema.properties required=$ctrl.schema.required></sg-properties>
        </div>

        <div class="sg-component-detail__docs" ng-if="$ctrl.docs">
          <h3>Documentation</h3>
          <div ng-include=$ctrl.docs></div>
        </div>
      </div>

      <div class="sg-component-detail__docs" ng-class="{'sg-component-detail__docs--isolated': $ctrl.isolated === 'true'}" ng-include=$ctrl.docs ng-if="$ctrl.docs && $ctrl.isolated === 'true'"></div>
    </section>
  `
};

export default ComponentDetailComponent;
