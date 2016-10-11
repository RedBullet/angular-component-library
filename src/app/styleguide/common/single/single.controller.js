class SingleController {
  constructor($stateParams) {
    const type = this.types.find((type) => {
      return type.type === $stateParams.type;
    });

    const component = type.components.find((component) => {
      return component.name === $stateParams.component;
    });

    this.type = type;
    this.component = component;
  }
};

SingleController.$inject = ['$stateParams'];

export default SingleController;
