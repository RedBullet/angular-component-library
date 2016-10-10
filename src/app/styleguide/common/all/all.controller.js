class AllController {
  constructor($http, StyleguideService) {
    this.componentTypes = StyleguideService.getComponentTypes();
    this.components = StyleguideService.getComponents();

    const ctrl = this;

    $http.get('docs/components.json')
      .success((data) => {
        ctrl.types = data;
      });
  }
};

AllController.$inject = ['$http', 'StyleguideService'];

export default AllController;
