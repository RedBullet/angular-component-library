import controller from './nav-menu.controller';

const NavMenuController = {
  bindings: {
    name: '@'
  },
  template: `
    <ul>
      <li><a href="#">Test</a></li>
      <li><a href="#">Test</a></li>
      <li><a href="#">Test</a></li>
      <li><a href="#">Test</a></li>
      <li><a href="#">Test</a></li>
    </ul>
  `,
};

export default NavMenuController;
