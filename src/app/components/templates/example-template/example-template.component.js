const ExampleTemplate = {
  template: `
    <nav-bar items="[{url: '#', title: 'Nav menu item'}, {url: '#', title: 'Nav menu item'}, {url: '#', title: 'Nav menu item'}]"></nav-bar>
    <hero title="Page title" subtitle="Page subtitle goes here probably a strapline"></hero>
    <page>
      <panel title="Panel title">
        <list-info
          items="[
            {
              label: 'Item label',
              value: 'Item value'
            },
            {
              label: 'Item label',
              value: 'Item value'
            },
            {
              label: 'Item label',
              value: 'Item value'
            }
          ]"
        ></list-info>
      </panel>

      <panel title="Panel 2 title">
        <input-text label="Text input"></input-text>
      </panel>
      <alert content="Alert content"/></alert>
    </page>
  `
};

export default ExampleTemplate;

