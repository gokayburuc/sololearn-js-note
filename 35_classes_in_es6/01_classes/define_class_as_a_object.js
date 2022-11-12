// object olarak class tanımlaması 
var Square = class Rectange {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

// yeni sabitler tanımlanıyor
const square = new Square(5, 5);
const poster = new Square(2, 3);

console.log(square.height);

