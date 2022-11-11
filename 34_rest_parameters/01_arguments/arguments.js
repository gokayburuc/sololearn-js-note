function containsAll(arr) {
    /* sisteme verilen arr isimli diziyinin 
    argüman sayısı yani arr ifadesinin dizi uzunluğu kontrol edilir 
    k ifadesi bu degerden kücük iken 
    arr ifadesinin k'daki degeri num ifadesi olur 
    eger num ifadesinin arr ifadesindeki 
    index konumu mevcut ve eşit degilse
    false döndürür 
    eger mevcut ise true döndürür 
    */
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }

    return true;
}


let x = [2, 4, 6, 7];

console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9)); // bu ifadede 9 değeri olduğundan dolayı sistem false döndürür 
