class StyleguideService {
  constructor($http) {
    this.$http = $http;
  }

  getData() {
    return this.$http.get('docs/components.json')
      .then((response) => {
        return response.data;
      });
  }
}

StyleguideService.$inject = ['$http'];

export default StyleguideService;
