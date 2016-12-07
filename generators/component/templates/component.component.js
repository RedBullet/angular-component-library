class <%= componentClassName %>Controller {
  constructor() {
    //
  }
  $onInit() {
    //
  }
  $onChanges() {
    //
  }
}

const <%= componentClassName %>Component = {
  bindings: {
    title: '@',
  },
  template: `
    <div class="<%= componentNameHyph %>">
      <h2 class="<%= componentNameHyph %>__title">{{ $ctrl.title }}</h2>
      <p class="<%= componentNameHyph %>__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mi ut magna lacinia bibendum. Cras sed erat in mauris efficitur tincidunt. Etiam eget mi ac lectus imperdiet tincidunt. Morbi vitae tortor dapibus, laoreet ante eget, porttitor odio.</p>
    </div>
  `,
  controller: <%= componentClassName %>Controller,
};

export default <%= componentClassName %>Component;
