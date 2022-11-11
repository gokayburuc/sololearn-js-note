/* ifademizi bu sefer ...nums seklinde 
variyadik olarak yazdık 
nums isimli bir variyadik ifade ile diziyi kontrol ediyoruz 
bu yalnızca es6 ile kod desteği olan tarayıcılarda geçerli bir komuttur 
go programlama dilinde variadic olarak tanımlanan bu ifade
js de rest parameter olarak tanımlanır
*/


/*
Bir fonksiyonun sadece son parametresi dinlenme parametresi olarak işaretlenebilir. Fazladan bağımsız değişken yoksa, rest parametresi yalnızca boş bir dizi olacaktır; rest parametresi asla tanımsız olmayacaktır.
*/
function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
};


let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));