class SingleController {
  constructor($stateParams, $http, StyleguideService) {
    const ctrl = this;

    $http.get('docs/components.json')
      .success((data) => {
        const type = data.find((type) => {
          return type.type === $stateParams.type;
        });

        const component = type.components.find((component) => {
          return component.name === $stateParams.component;
        });

        ctrl.type = type;
        ctrl.component = component;
      });
  }
};

SingleController.$inject = ['$stateParams', '$http', 'StyleguideService'];

export default SingleController;
