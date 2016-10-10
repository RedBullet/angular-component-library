const TabsComponent = {
  bindings: {
    types: '<',
  },
  controller: function () {
    this.$onInit = () => {
      this.selected = 0;
    };

    this.selectTab = (index) => {
      this.selected = index;
    };
  },
  template: `
    <div class="sg-tabs">

      <ul class="sg-tabs__list" id="sg-tabs">
        <li class="sg-tabs__item ng-class:{ 'sg-tabs__item--active': $ctrl.selected == $index }" ng-repeat="type in $ctrl.types">
          <a href="#{{type.type}}" class="sg-tabs__button" ng-click="$ctrl.selectTab($index)">
            <i class="icon icon-{{type.type.toLowerCase()}} {{$ctrl.selected}} {{$index}}"></i>
            <span>{{type.type}}</span>
          </a>
        </li>
      </ul>

      <div class="sg-tabs__content">
        <div class="sg-tabs__pane ng-class:{ 'sg-tabs__pane--active': $ctrl.selected == $index }" id="atoms" ng-repeat="type in $ctrl.types">
          <sg-nav components=type.components></sg-nav>
        </div>
      </div>

    </div>
  `
};

export default TabsComponent;
