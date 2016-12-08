import { assert, should, expect } from 'chai';

describe('Alert', () => {
  let scope, element;

  beforeEach(angular.mock.module('root'));

  beforeEach(angular.mock.module(($urlRouterProvider) => {
    $urlRouterProvider.deferIntercept();
  }));

  beforeEach(inject(['$rootScope', '$compile', ($rootScope, $compile) => {
    scope = $rootScope.$new();
    element = angular.element('<alert title="{{alert.title}}" content="{{alert.content}}"></alert>');
    element = $compile(element)(scope);
    scope.alert = {title: 'Alert title', content: 'Alert content'};
    scope.$apply();
  }]));

  it('should render an alert with a title and content', function () {
    const component = element[0].querySelector('.alert');
    const title = element[0].querySelector('.alert__title');
    const content = element[0].querySelector('.alert__content');

    expect(component).to.exist;
    expect(title).to.exist;
    expect(content).to.exist;
    expect(component.classList.contains('alert--info')).to.be.ok;

    expect(title.textContent).to.equal('Alert title');
    expect(content.textContent).to.equal('Alert content');
  });

});
