class Negotiations {

  private negotiations: Array<Negotiation> = [];
  // outra declaração possível Negotiation[]

  add(negotiation: Negotiation) {
    this.negotiations.push(negotiation);
  }

  toArray() {
    return [].concat(this.negotiations);
  }
}