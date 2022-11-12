// isimsiz olarak da sınıf tanımlaması yapılabilir 
var Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

const square = new Square(5, 5);
const poster = new Square(2, 3);

console.log(square.height);