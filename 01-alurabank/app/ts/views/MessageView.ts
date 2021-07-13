class MessageView {
  private ele: Element;
  constructor(sel: string) {
    this.ele = document.querySelector(sel);
  }

  template(model: string) {
    return `<p class="alert alert-info">${model}</p>`
  }

  update(model: string) {
    this.ele.innerHTML = this.template(model);
  }
}