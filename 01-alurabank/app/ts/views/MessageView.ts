class MessageView extends View {

  template(model: string) {
    return `<p class="alert alert-info">${model}</p>`
  }

  update(model: string) {
    this.element.innerHTML = this.template(model);
  }
}