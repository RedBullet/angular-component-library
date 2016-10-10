const NavComponent = {
  bindings: {
    components: '<',
  },
  template: `
    <div class="sg-nav">
      <ul class="sg-nav__list">
        <li class="sg-nav__item" ng-repeat="component in $ctrl.components">
          <a class="sg-nav__link" id="{{component.name}}" href="/styleguide/{{type.type}}/{{component.name}}">
            {{component.name}}
          </a>
        </li>
      </ul>
    </div>
  `
};

export default NavComponent;
