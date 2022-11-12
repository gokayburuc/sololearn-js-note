class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise. ');
    }
}

class Dog extends Animal {
    speak() {
        super.speak(); // super üzeinden bir üstteki speak fonksiyonu cagrildi
        console.log(this.name + 'barks.');
    }
}

let dog = new Dog('Rex');
dog.speak(); // Constructor ifadesnden makes a noise gelir 
// Dog class icindeki speak 'ten de barks gelir  