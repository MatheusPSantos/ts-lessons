class MessageView {
    constructor(sel) {
        this.ele = document.querySelector(sel);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
    update(model) {
        this.ele.innerHTML = this.template(model);
    }
}
