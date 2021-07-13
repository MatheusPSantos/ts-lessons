class View {
    constructor(sel) {
        this.element = $(sel);
    }
    update(model) {
        this.element.html(this.template(model));
    }
}
