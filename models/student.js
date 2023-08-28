const People = require('./people');

class Student extends People {
    constructor(id, name, age) {
        super(id, name);
        this.age = age;
    }

    study() {
        return `${this.name} is studying for their exams.`; 
    }
}


module.exports = Student; 