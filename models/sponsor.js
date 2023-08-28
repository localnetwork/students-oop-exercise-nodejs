const People = require('./people');


class Sponsor extends People {
    constructor(id, name, amount) {
        super(id, name);
        this.amount = amount; 
    }


    give() {
        return `Sponsor ${this.name} gives an amount of ${this.amount}`; 
    }
}

module.exports = Sponsor; 