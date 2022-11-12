class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // TODO: golang içindeki class struct ve interface kavramlarını araştır 
    // getter  fonksiyonu - başka bir metod ifadesini çağıran fonksiyondur
    // calcArea isimli metodu çağırdıktan sonsra bu islemileri square isimli 
    //Rectangle class'ına baglı tanımladığımız nesneye uyguluyoruz 

    get area() {
        return this.calcArea();
    }

    // calcArea isimli metod 
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(5, 5);

console.log(square.area); // 25