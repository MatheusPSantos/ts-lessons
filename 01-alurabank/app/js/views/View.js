class View {
    constructor(sel) {
        this.element = document.querySelector(sel);
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
    template(model) {
        throw new Error('The method "template" need be implemented');
    }
}
