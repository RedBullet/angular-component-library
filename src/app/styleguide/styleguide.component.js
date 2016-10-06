import StyleguideController from './styleguide.controller';

const StyleguideComponent = {
  controller: StyleguideController,
  template: `
    <header>
      <sg-nav></sg-nav>
    </header>

    <main>
      <sg-component-list components=$ctrl.components></sg-component-list>
    </main>
  `
};

export default StyleguideComponent;
