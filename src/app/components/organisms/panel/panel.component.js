const PanelComponent = {
  transclude: true,
  bindings: {
    title: '@',
  },
  template: `
    <section class="panel">
      <header class="panel__header" ng-if="$ctrl.title">
        <h3 class="panel__title">{{$ctrl.title}}</h3>
      </header>
      <div class="panel__content">
        <ng-transclude></ng-transclude>
      </div>
    </section>
  `,
};

export default PanelComponent;
