const ExampleTemplate = {
  bindings: {
    navBarItems: '<',
    listInfoItems: '<',
    alertContent: '@',
  },
  template: `
    <nav-bar items="$ctrl.navBarItems"></nav-bar>
    <hero title="Page title" subtitle="Page subtitle goes here probably a strapline"></hero>
    <page>
      <panel title="Panel title">
        <list-info items="$ctrl.listInfoItems"></list-info>
      </panel>

      <panel title="Panel 2 title">
        <input-text label="Text input"></input-text>
      </panel>
      <alert content="{{$ctrl.alertContent}}"></alert>
    </page>
  `
};

export default ExampleTemplate;
