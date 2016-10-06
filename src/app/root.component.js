import angular from 'angular';

const RootComponent = {
  template: `
    <div class="app">
      <nav-bar></nav-bar>
      <alert title="Info" content="An alert with info" />
      <div ui-view></div>
    </div>
  `
};

export default RootComponent;
