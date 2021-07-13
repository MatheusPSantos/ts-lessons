abstract class View<T> {
  private element: Element;

  constructor(sel: string) {
    this.element = document.querySelector(sel);
  }

  update(model: T): void {
    this.element.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}