const HeroComponent = {
  bindings: {
    title: '@',
    subtitle: '@'
  },
  template: `
    <section class="hero">
      <h1 class="hero__title">{{$ctrl.title}}</h1>
      <p class="hero__subtitle">{{$ctrl.subtitle}}</p>
    </section>
  `,
};

export default HeroComponent;
