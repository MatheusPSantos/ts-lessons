class NegotiationController {

  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputDate = <HTMLInputElement>document.querySelector("#data");
    this.inputQuantity = <HTMLInputElement>document.querySelector("#quantidade");
    this.inputValue = <HTMLInputElement>document.querySelector("#valor");
  }

  add(event: Event) {

    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this.inputDate.value.replace(/-/g, ',')),
      parseInt(this.inputQuantity.value),
      parseFloat(this.inputValue.value)
    );

    console.log(negotiation.quantity + 20);
  }
}