const ComponentDetailComponent = {
  bindings: {
    name: '@',
    docs: '@',
  },
  template: `
    <h2>{{$ctrl.name}}</h2>
    <h3>{{$ctrl.docs}}</h3>
    <div ng-include=$ctrl.docs></div>
  `
};

export default ComponentDetailComponent;
