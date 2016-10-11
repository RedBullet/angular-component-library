/* eslint-disable angular/window-service  */
describe('Alert', () => {
  let scope, element;
  beforeEach(angular.mock.module('components.molecules.alert'));

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

    expect(component).toBeTruthy();
    expect(title).toBeTruthy();
    expect(content).toBeTruthy();
    expect(component.classList.contains('alert--info')).toBeTruthy();

    expect(title.textContent).toBe('Alert title');
    expect(content.textContent).toBe('Alert content');
  });

});

/* eslint-enable angular/window-service  */
