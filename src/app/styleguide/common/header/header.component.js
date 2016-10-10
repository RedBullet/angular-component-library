const HeaderComponent = {
  bindings: {
    types: '<',
  },
  template: `
    <header role="mast-head" class="sg-header">
      <sg-menu types=$ctrl.types></sg-menu>
    </header>
  `
};

export default HeaderComponent;
