// lib/math.js
export let sum = (x, y) => { return x + y; }
export let pi = 3.14;

// yukarıda yazdığımız modülü başka bir js dosyasına direkt olarak path belirterek cagırıp kullanabiliriz

// app.js
import * as math from "lib/math"
console.log(`2p = + ${math.sum(math.pi, math.pi)}`)


/*
Keep on learning!

ES6, modülleri resmi olarak destekler, 
ancak bazı tarayıcılar henüz modülleri yerel olarak desteklememektedir.
 Bu nedenle, kodumuzu çalıştırmak için Webpack veya Browserify 
 gibi paketleyiciler (oluşturucular) kullanmalıyız.
 
*/