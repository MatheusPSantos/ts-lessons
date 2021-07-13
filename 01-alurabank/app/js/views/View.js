class View {
    constructor(sel) {
        this.element = document.querySelector(sel);
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
