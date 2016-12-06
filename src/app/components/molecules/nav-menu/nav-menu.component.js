const NavMenuComponent = {
  bindings: {
    name: '@',
    items: '<'
  },
  template: `
    <ul class="nav-menu">
      <li class="nav-menu__item" ng-repeat="item in $ctrl.items" ng-if="item.state">
        <a ui-sref="{{ item.state }}" class="nav-menu__link">{{ item.title }}</a>
      </li>
    </ul>
  `,
};

export default NavMenuComponent;
