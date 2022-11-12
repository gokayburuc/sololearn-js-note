function* idMaker() {
    let index = 0;
    while (index < 5)
        yield index++;
}
var gen = idMaker();

console.log(gen.next().value); // gen isimli fonksiyon'da bir sonraki değere geç ve değeri ekrana yazdır
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Try to add one more console.log, just like the above see what happens.
console.log(gen.next().value); // null ifadesi döndürür çünkü index <5 ifadesinin şartı sağlanmaz