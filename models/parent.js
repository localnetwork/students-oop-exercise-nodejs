const People = require('./people');

class Parent extends People {
    constructor(id, name, job) {
        super(id, name);
        this.job = job; 
    }
    work() {
        return `${this.name} is working as ${this.job}`; 
    }
}

module.exports = Parent; 