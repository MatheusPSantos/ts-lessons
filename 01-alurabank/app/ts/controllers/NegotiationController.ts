class NegotiationController {

  private inputDate: JQuery;
  private inputQuantity: JQuery;
  private inputValue: JQuery;
  private negotiations: Negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView('#negociacoesView');
  private messageView = new MessageView('#mensagemView');

  constructor() {
    this.inputDate = $("#data");
    this.inputQuantity = $("#quantidade");
    this.inputValue = $("#valor");
    this.negotiationsView.update(this.negotiations);
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this.inputDate.val().replace(/-/g, ',')),
      parseInt(this.inputQuantity.val()),
      parseFloat(this.inputValue.val())
    );

    this.negotiations.add(negotiation);
    this.negotiationsView.update(this.negotiations);
    this.messageView.update('Negotiation added with success.');
  }
}