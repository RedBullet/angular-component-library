class PropertiesController {
  $onInit() {
    this.hasProperties = !angular.equals({}, this.properties);
  }
}

const PropertiesComponent = {
  bindings: {
    properties: '<',
    required: '<',
  },
  template: `
    <section class="sg-properties" ng-if="$ctrl.hasProperties">
      <h3 class="sg-properties__title">Properties</h3>
      <table class="sg-properties__table">
        <thead>
          <th>Name</th>
          <th>Type</th>
          <th>Optional</th>
          <th>Description</th>
        </thead>
        <tr class="sg-properties__property" ng-repeat="(key, property) in $ctrl.properties">
          <td class="sg-properties__property__name">{{key}}</td>
          <td class="sg-properties__property__type">{{property.type}}</td>
          <td class="sg-properties__property__required" ng-class="{'sg-properties__property__required--optional': $ctrl.required.indexOf(key) < 0, 'sg-properties__property__required--required': $ctrl.required.indexOf(key) > -1}">
            <div ng-if="$ctrl.required.indexOf(key) < 0">
              <i class="styleguide-icon styleguide-icon-tick"></i>
              <span>Optional</span>
            </div>
          </td>
          <td class="sg-properties__property__description">{{property.description}}</td>
        </tr>
      </table>
    </section>
  `,
  controller: PropertiesController,
};

export default PropertiesComponent;
