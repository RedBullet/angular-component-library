import SingleController from './single.controller';

const SingleComponent = {
  bindings: {
    types: '<',
    isolated: '@',
  },
  controller: SingleController,
  template: `
    <sg-component-detail
      name="{{$ctrl.component.name}}"
      docs="{{$ctrl.component.docs}}"
      variants=$ctrl.component.variants
      type="{{$ctrl.type.type}}"
      schema=$ctrl.component.schema
      isolated="{{$ctrl.isolated}}"
    ></sg-component-detail>
  `
};

export default SingleComponent;
