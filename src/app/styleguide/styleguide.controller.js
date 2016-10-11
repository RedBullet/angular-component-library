class StyleguideController {
  constructor(StyleguideService) {
    const ctrl = this;

    StyleguideService.getData().then((types) => {
      ctrl.types = types;
    });
  }
};

StyleguideController.$inject = ['StyleguideService'];

export default StyleguideController;
