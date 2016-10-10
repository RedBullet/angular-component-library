const NavMenuComponent = {
  bindings: {
    name: '@',
    items: '<'
  },
  template: `
    <ul class="nav-menu">
      <li class="nav-menu__item" ng-repeat="item in $ctrl.items">
        <a href=item.url class="nav-menu__link">{{ item.title }}</a>
      </li>
    </ul>
  `,
};

export default NavMenuComponent;
