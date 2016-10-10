import controller from './nav-bar.controller';

const NavBarComponent = {
  bindings: {
    items: '<',
  },
  template: `
    <section class="nav-bar">
      <div class="nav-bar__logo">
        <logo name="Red Bullet" src="http://placehold.it/200x75"></logo>
      </div>
      <div class="nav-bar__menu">
        <nav-menu items=$ctrl.items></nav-menu>
      </div>
    </section>
  `,
};

export default NavBarComponent;
