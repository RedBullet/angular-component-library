const PageComponent = {
  transclude: true,
  template: `
    <section class="page">
      <div class="page__inner">
        <ng-transclude></ng-transclude>
      </div>
    </section>
  `,
};

export default PageComponent;
