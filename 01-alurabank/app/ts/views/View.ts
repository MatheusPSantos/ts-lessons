declare var $: any;
abstract class View<T> {
  private element: any;

  constructor(sel: string) {
    this.element = $(sel);
  }

  update(model: T): void {
    this.element.html(this.template(model));
  }

  abstract template(model: T): string;
}