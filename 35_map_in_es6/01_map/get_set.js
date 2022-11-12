let map = new Map();
// deger ekleme 
map.set('k1', 'v1').set('k2', 'v2');

// get ile ekrana yazdirma
console.log(map.get('k1')); // v1

// mevcudiyet kontrolü 
console.log(map.has('k2')); // true

// for ile degerleri ekrana yazdırma
for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);