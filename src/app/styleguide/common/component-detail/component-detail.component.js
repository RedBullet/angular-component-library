const ComponentDetailComponent = {
  bindings: {
    name: '@',
    docs: '@',
    properties: '<',
  },
  template: `
    <h3>{{$ctrl.name}}</h3>
    <div>{{$ctrl.docs}}</div>
    <div ng-include=$ctrl.docs ng-if=$ctrl.docs></div>
    <sg-properties properties=$ctrl.properties ng-if=$ctrl.properties></sg-properties>
  `
};

export default ComponentDetailComponent;
