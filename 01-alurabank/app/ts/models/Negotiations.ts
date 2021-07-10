class Negotiations {

  private negotiations: Array<Negotiation> = [];
  // outra declaração possível Negotiation[]

  add(negotiation: Negotiation): void {
    this.negotiations.push(negotiation);
  }

  toArray(): Negotiation[] {
    return [].concat(this.negotiations);
  }
}