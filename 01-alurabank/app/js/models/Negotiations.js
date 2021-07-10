class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    // outra declaração possível Negotiation[]
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    toArray() {
        return this.negotiations;
    }
}
