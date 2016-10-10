const TabsComponent = {
  bindings: {
    types: '<',
  },
  template: `
    <div class="sg-tabs">

      <ul class="sg-tabs__list" id="sg-tabs">
        <li class="sg-tabs__item sg-tabs__item--active" ng-repeat="type in $ctrl.types">
          <a href="#{{type.type}}" class="sg-tabs__button">
            <i class="icon icon-{{type.type.toLowerCase()}}"></i>
            <span>{{type.type}}</span>
          </a>
        </li>
      </ul>

      <div class="sg-tabs__content">
        <div class="sg-tabs__pane sg-tabs__pane--active" id="atoms" ng-repeat="type in $ctrl.types">
          <sg-nav components=type.components></sg-nav>
        </div>
      </div>

    </div>
  `
};

export default TabsComponent;
