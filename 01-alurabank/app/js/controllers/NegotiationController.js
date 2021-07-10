class NegotiationController {
    constructor() {
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this.inputDate.value.replace(/-/g, ',')), parseInt(this.inputQuantity.value), parseFloat(this.inputValue.value));
        console.log(negotiation.quantity + 20);
    }
}
