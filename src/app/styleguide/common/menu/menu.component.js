const MenuComponent = {
  bindings: {
    types: '<',
  },
  template: `
    <div class="sg-menu">
      <h1 class="sg-menu__logo"><a class="sg-menu__link" ui-sref="styleguide.all">Component Library</a></h1>

      <nav role="navigation">
        <sg-tabs types=$ctrl.types></sg-nav>
      </nav>

    </div>
  `
};

export default MenuComponent;
