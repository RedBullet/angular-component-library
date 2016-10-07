const ComponentDetailComponent = {
  bindings: {
    name: '@',
    docs: '@',
  },
  template: `
    <h3>{{$ctrl.name}}</h3>
    <div>{{$ctrl.docs}}</div>
    <div ng-include=$ctrl.docs></div>
  `
};

export default ComponentDetailComponent;
