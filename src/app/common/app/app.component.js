import angular from 'angular';
import controller from './app.controller';

const AppComponent = {
  template: `
    <div class="root">
      <div class="app">
        <div ui-view></div>
      </div>
    </div>
  `,
  controller,
};

export default AppComponent;
