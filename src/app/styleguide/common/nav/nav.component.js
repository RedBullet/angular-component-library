import NavController from './nav.controller';

const NavComponent = {
  bindings: {
    componentTypes: '<',
  },
  template: `
    <nav>
      <div ng-repeat="type in $ctrl.componentTypes">
        <a href="#">{{type.name}}</a>
      </div>
    </nav>
  `
};

export default NavComponent;
