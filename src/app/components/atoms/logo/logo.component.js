import controller from './logo.controller';

const LogoComponent = {
  bindings: {
    name: '@',
    src: '@',
  },
  template: `<img src="{{ $ctrl.src }}" alt="{{ $ctrl.name }}">`,
};

export default LogoComponent;
