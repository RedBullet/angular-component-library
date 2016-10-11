import SingleController from './single.controller';

const SingleComponent = {
  controller: SingleController,
  template: `
    <sg-component-detail name="{{$ctrl.component.name}}" docs="{{$ctrl.component.docs}}" type="{{$ctrl.type.type}}" schema=$ctrl.component.schema></sg-component-detail>
  `
};

export default SingleComponent;
