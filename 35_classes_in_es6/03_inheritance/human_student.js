class Human {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Human {
    constructor(name, age) {
        // this name in super ile cagirilmasÄ±
        super(name);
        this.age = age;
    }
}