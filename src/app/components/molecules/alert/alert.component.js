const AlertComponent = {
  bindings: {
    title: '@',
    content: '@',
    type: '@',
  },
  template: `
    <section ng-class="{alert: true}">
      <h4 class="alert__title" ng-if="$ctrl.title">{{$ctrl.title}}</h4>
      <p class="alert__content">{{$ctrl.content}}</p>
    </section>
  `,
};

export default AlertComponent;
