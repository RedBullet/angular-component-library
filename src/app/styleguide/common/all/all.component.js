const AllComponent = {
  bindings: {
    types: '<',
  },
  template: `
    <div ng-repeat="type in $ctrl.types">
      <sg-component-list components=type.components type=type.type></sg-component-list>
    </div>
  `
};

export default AllComponent;
