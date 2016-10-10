const TabsComponent = {
  bindings: {
    types: '<',
    selected: '<',
  },
  controller: ['$window', function ($window) {
    this.$onInit = () => {
      const largeScreen = $window.matchMedia('(min-width: 50em)').matches;
      if (largeScreen) {
        this.selected = 0;
      }
    };

    this.$postLink = () => {
      $window.addEventListener('resize', this.onResize);
    }

    this.$onDestroy = () => {
      $window.removeEventListener('resize', this.onResize);
    }

    this.selectTab = (index) => {
      const largeScreen = $window.matchMedia('(min-width: 50em)').matches;
      if (largeScreen) {
        this.selected = index;
      } else {
        if (this.selected !== index) {
          this.selected = index;
        } else {
          this.selected = false;
        }
      }
    };

    this.onResize = () => {
      if (this.selected === false && $window.matchMedia('(min-width: 50em)').matches) {
        this.selected = 0;
      }
    }
  }],
  template: `
    <div class="sg-tabs">

      <ul class="sg-tabs__list" id="sg-tabs">
        <li class="sg-tabs__item ng-class:{ 'sg-tabs__item--active': $ctrl.selected === $index }" ng-repeat="type in $ctrl.types">
          <a href="#{{type.type}}" class="sg-tabs__button" ng-click="$ctrl.selectTab($index)">
            <i class="icon icon-{{type.type.toLowerCase()}} {{$ctrl.selected}} {{$index}}"></i>
            <span>{{type.type}}</span>
          </a>
        </li>
      </ul>

      <div class="sg-tabs__content">
        <div class="sg-tabs__pane ng-class:{ 'sg-tabs__pane--active': $ctrl.selected === $index }" id="atoms" ng-repeat="type in $ctrl.types">
          <sg-nav components=type.components type="{{type.type}}"></sg-nav>
        </div>
      </div>

    </div>
  `
};

export default TabsComponent;
