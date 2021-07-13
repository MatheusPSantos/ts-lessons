class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    toArray() {
        return [].concat(this.negotiations);
    }
}
