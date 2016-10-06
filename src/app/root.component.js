import angular from 'angular';

const RootComponent = {
  template: `
    <div class="app">
      <nav-bar></nav-bar>
      <div ui-view></div>
    </div>
  `
};

export default RootComponent;
