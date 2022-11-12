// class ifadeleri tanımlanırken 
class Rectangle {
    // bir class yazarken constructor ifadesi kullanılır
    constructor(height, width) {
        // this ile property atanır 
        this.height = height;
        this.width = width;
    }
}

// bir class ifadesinden birden çok nesne oluşturulabilir 
const square = new Rectangle(20, 20);
const poster = new Rectangle(150, 40); 