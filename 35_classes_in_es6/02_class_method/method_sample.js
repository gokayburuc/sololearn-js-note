class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // static method 
    // uygulama dışında çağrılamazlar 
    // uygulama içi yardımcı metod olarak kullanılırlar
    //TODO : static method

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        // hypot yani hipotenüs ile iki nokta arasındaki uzaklığı bulan fonksiyondur.
        // bizim örneğimizde birinci nokta (7,2) ve ikinci nokta (3,8) 'dir.
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distance(p1, p2));
