class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    // outra declaração possível Negotiation[]
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    toArray() {
        return [].concat(this.negotiations);
    }
}
