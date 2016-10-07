class StyleguideController {
  constructor($http, StyleguideService) {
    this.componentTypes = StyleguideService.getComponentTypes();
    this.components = StyleguideService.getComponents();

    const ctrl = this;

    $http.get('docs/components.json')
      .success((data) => {
        console.log(data);
        ctrl.data = data;
      });
  }
};

StyleguideController.$inject = ['$http', 'StyleguideService'];

export default StyleguideController;
