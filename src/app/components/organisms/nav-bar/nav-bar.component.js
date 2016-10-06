import controller from './nav-bar.controller';

const NavBarComponent = {
  template: `
    <logo name="Red Bullet"></logo>
    <nav-menu items="{{ $ctrl.items }}"></nav-menu>
  `,
};

export default NavBarComponent;
