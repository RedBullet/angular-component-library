import controller from './logo.controller';

const LogoComponent = {
  bindings: {
    name: '@'
  },
  template: `<img src="https://placekitten.com/80/80" alt="{{ $ctrl.name }}">`,
};

export default LogoComponent;
