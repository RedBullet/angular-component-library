const ListInfoComponent = {
  bindings: {
    items: '<',
  },
  template: `
    <ul class="list-info">
      <li class="list-info__item" ng-repeat="item in $ctrl.items">
        <span class="list-info__label">{{item.label}}</span>
        <span class="list-info__value">{{item.value}}</span>
      </li>
    </ul>
  `,
};

export default ListInfoComponent;
