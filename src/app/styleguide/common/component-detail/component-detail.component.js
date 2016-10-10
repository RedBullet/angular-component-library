const ComponentDetailComponent = {
  bindings: {
    name: '@',
    docs: '@',
    properties: '<',
  },
  template: `
    <section class="sg-component-detail">
      <header class="sg-component-detail__header">
        <h2 class="sg-component-detail__subtitle">{{$ctrl.type}}</h2>
        <h1 class="sg-component-detail__title">{{$ctrl.name}}</h1>
      </header>
      <div class="sg-component-detail__docs" ng-include=$ctrl.docs ng-if="$ctrl.docs"></div>
      <div class="sg-component-detail__properties" ng-if="$ctrl.properties">
        <sg-properties properties=$ctrl.properties></sg-properties>
      </div>
    </section>
  `
};

export default ComponentDetailComponent;
