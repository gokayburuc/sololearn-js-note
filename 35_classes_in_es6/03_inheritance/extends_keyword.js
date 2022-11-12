class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise ');
    }
}

// Animal sınıfına ait özellikleri miras (inheritance) ile dog 'a aktarıyoruz
class Dog extends Animal {
    // animal icindeki speak() metodundan farklı olarak yeni bir speak metodu tanımadık
    speak() {
        console.log(this.name + ' barks!');
    }
}

let newdog = new Dog('Rex');
newdog.speak(); 