const PropertiesComponent = {
  bindings: {
    properties: '<',
  },
  template: `
    <section class="sg-properties">
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
          <td class="sg-properties__property__required" ng-class="{'sg-properties__property__required--optional': !property.required, 'sg-properties__property__required--required': property.required}">
            <div ng-if="!property.required">
              <i class="icon icon-tick"></i>
              <span>Optional</span>
            </div>
          </td>
          <td class="sg-properties__property__description">{{property.description}}</td>
        </tr>
      </table>
    </section>
  `
};

export default PropertiesComponent;
