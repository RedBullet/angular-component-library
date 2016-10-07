const InputTextComponent = {
  bindings: {
    label: '@',
  },
  template: `
    <section class="input-text">
      <div class="input-text__inner">
        <label class="input-text__label">{{$ctrl.label}}</label>
        <div class="input-text__input-wrap">
          <input type="text" class="input-text__input" value="" />
        </div>
      </div>
    </section>
  `,
};

export default InputTextComponent;
