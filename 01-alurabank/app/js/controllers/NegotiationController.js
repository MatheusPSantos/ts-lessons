class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negociacoesView');
        this.messageView = new MessageView('#mensagemView');
        this.inputDate = $("#data");
        this.inputQuantity = $("#quantidade");
        this.inputValue = $("#valor");
        this.negotiationsView.update(this.negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this.inputDate.val().replace(/-/g, ',')), parseInt(this.inputQuantity.val()), parseFloat(this.inputValue.val()));
        this.negotiations.add(negotiation);
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negotiation added with success.');
    }
}
