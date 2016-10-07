class StyleguideController {
  constructor($http, StyleguideService) {
    this.componentTypes = StyleguideService.getComponentTypes();
    this.components = StyleguideService.getComponents();

    $http.get('docs/components.json')
      .success((data) => {
        //
      })
  }
};

StyleguideController.$inject = ['$http', 'StyleguideService'];

export default StyleguideController;
