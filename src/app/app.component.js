const AppComponent = {
  template: `
    <div class="app">
      <!-- Sorry making static template -->
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
      </page>
      <div ui-view></div>
    </div>
  `
};

export default AppComponent;
