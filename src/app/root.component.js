import angular from 'angular';

const RootComponent = {
  template: `
    <div class="app">
      <nav-bar></nav-bar>
      <alert title="Info" content="An alert with info"></alert>
      <alert title="Warning" content="An alert with warning" type="warning"></alert>
      <div ui-view></div>
    </div>
  `
};

export default RootComponent;
