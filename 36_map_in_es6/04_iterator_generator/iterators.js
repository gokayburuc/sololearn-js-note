let myIterableObj = {
    // iterators - yineleyiciler 
    // burada * sembolü generator olarak kullanılır sisteme verilen degerleri üretir
    // bu tarz fonksiyonlara generator function ya da gen function denir 

    [Symbol.iterator]: function* () {
        //TODO: yield fonksiyonu -Python kontrol et
        yield 1; yield 2; yield 3;
    }
};

// 1 2 ve 3 değerlerini it
console.log([...myIterableObj]); // [ 1, 2, 3 ]