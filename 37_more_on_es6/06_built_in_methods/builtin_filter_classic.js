let res = [2, 3, 4, 5, 6, 7, 8].filter(function (x) {
    // filter function ile 3 ten büyük degerler i yazdırır 
    return x > 3
})[0]; // bütün dizi icinden bulduğu ilk değer olan [0] değerini yazdirir 
// eger [0] ifadesi silinirse array olarak yazdirir [4,5,6,7,8]


console.log(res); 




// let res = [4, 5, 1, 8, 2, 0].filter(function (x) {
//     return x > 3;
//   })[0];
  
//   console.log(res);