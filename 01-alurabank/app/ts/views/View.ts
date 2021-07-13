class View<T> {
  private element: Element;

  constructor(sel: string) {
    this.element = document.querySelector(sel);
  }

  update(model: T): void {
    this.element.innerHTML = this.template(model);
  }

  template(model: T): string {
    throw new Error('The method "template" need be implemented');
  }
}