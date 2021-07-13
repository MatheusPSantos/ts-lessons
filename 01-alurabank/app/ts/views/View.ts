class View {
  protected element: Element;

  constructor(sel: string) {
    this.element = document.querySelector(sel);
  }
}