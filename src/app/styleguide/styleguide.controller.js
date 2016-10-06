class StyleguideController {
  constructor(StyleguideService) {
    this.componentTypes = StyleguideService.getComponentTypes();
    this.components = StyleguideService.getComponents();
  }
};

StyleguideController.$inject = ['StyleguideService'];

export default StyleguideController;
