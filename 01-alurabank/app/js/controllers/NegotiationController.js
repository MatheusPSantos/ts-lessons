class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negociacoesView');
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negotiationsView.update();
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this.inputDate.value.replace(/-/g, ',')), parseInt(this.inputQuantity.value), parseFloat(this.inputValue.value));
        this.negotiations.add(negotiation);
        this.negotiations.toArray().forEach(n => {
            console.log(n.date);
            console.log(n.quantity);
            console.log(n.value);
        });
        console.log(negotiation.quantity + 20);
    }
}
