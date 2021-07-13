class NegotiationController {

  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations: Negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView('#negociacoesView');
  private messageView = new MessageView('#mensagemView');

  constructor() {
    this.inputDate = <HTMLInputElement>document.querySelector("#data");
    this.inputQuantity = <HTMLInputElement>document.querySelector("#quantidade");
    this.inputValue = <HTMLInputElement>document.querySelector("#valor");
    this.negotiationsView.update(this.negotiations);
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this.inputDate.value.replace(/-/g, ',')),
      parseInt(this.inputQuantity.value),
      parseFloat(this.inputValue.value)
    );

    this.negotiations.add(negotiation);
    this.negotiationsView.update(this.negotiations);
    this.messageView.update('Negotiation added with success.');
  }
}