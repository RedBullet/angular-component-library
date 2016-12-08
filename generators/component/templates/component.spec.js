import { assert, should, expect } from 'chai';

describe('<%= type %>: <%= componentName %>', () => {
  let scope, element;

  beforeEach(angular.mock.module('root'));

  beforeEach(angular.mock.module(($urlRouterProvider) => {
    $urlRouterProvider.deferIntercept();
  }));

  beforeEach(inject(['$rootScope', '$compile', ($rootScope, $compile) => {
    scope = $rootScope.$new();
    element = angular.element('<<%= componentNameHyph %> title="Some text"></<%= componentNameHyph %>>');
    element = $compile(element)(scope);
    scope.<%= componentName %> = {title: 'Some text'};
    scope.$apply();
  }]));

  it('should render a <%= componentName %> with a title', function () {
    const component = element[0].querySelector('.<%= componentNameHyph %>');
    const title = element[0].querySelector('.<%= componentNameHyph %>__title');

    expect(component).to.exist;
    expect(title).to.exist;

    expect(title.textContent).to.equal('Some text');
  });
});
