function myFunction(w, x, y, z) {
    console.log(w + x + y + z);
}

var args = [1, 2, 3];
// apply isimli fonksiyon yardımı ile harici bir özellik eklene
// aşağıdaki ifade ilk önce argümanlara 4 degerini ekler 
// böylece dizimiz 1,2,3,4 sayılarından oluşur 
// sonra da bu halde iken fonksiyonu apply ile uygular 
// bu degerler toplanarak ekrana 10 degeri yazdırılır.
myFunction.apply(null, args.concat(4));

