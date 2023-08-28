class People {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    introduce() {
        return `Hello, my name is ${this.name}.`;
    }
}

module.exports = People; 