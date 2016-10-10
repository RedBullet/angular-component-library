const InputTextComponent = {
  bindings: {
    label: '@',
    error: '<',
  },
  template: `
    <section class="input-text ng-class:{ 'input-text--error': $ctrl.error }">
      <div class="input-text__inner">
        <label class="input-text__label">{{$ctrl.label}}</label>
        <div class="input-text__input-wrap">
          <input type="text" class="input-text__input" value="" />
        </div>
        <alert title="{{ $ctrl.error.title }}" content="{{ $ctrl.error.content }}" type="error" ng-if="$ctrl.error"></alert>
      </div>
    </section>
  `,
};

export default InputTextComponent;
