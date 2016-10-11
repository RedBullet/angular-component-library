import SingleController from './single.controller';

const SingleComponent = {
  bindings: {
    types: '<',
  },
  controller: SingleController,
  template: `
    <sg-component-detail name="{{$ctrl.component.name}}" docs="{{$ctrl.component.docs}}" type="{{$ctrl.type.type}}" properties=$ctrl.component.schema.properties></sg-component-detail>
  `
};

export default SingleComponent;
