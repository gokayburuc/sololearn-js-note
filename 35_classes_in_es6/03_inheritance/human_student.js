class Human {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Human {
    constructor(name, age) {
        // this name in super ile cagirilması
        super(name);
        this.age = age;
    }
}