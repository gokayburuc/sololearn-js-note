# DOM - DOCUMENT OBJECT MODEL 

HTML dökümanı içindeki tüm kısımları nesne (object) olarak kabul eden ve bu nesneleri bir ağacın dalları ve yaprakları gibi (node) 'lar ile bir iskelete oturtan modelleme sistemidir.

## Modelin işleyişi 

Model işlerken 
- üst kol (parent) 
- alt kol (child)
- birbirine eş kollar (siblings)

gibi hiyerarşik bir yapıda işler. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1></h1>
    <a href="www...."></a>
</body>
</html>
```


Yukarıdaki sistem ele alındığında 

- `<html>` iki adet alt ifade (children) 'dan oluşur. Bunlar `<head>` ve `<body>` ifadeleridir.
- `<head>` de iki adet alt ifadeden (children) oluşur. <meta> ve `<title>` ifadeleridir. Aynı zamanda bir üst ifade (parent) olan `<html>` e bağlıdır. 
- `<title>` ifadesi bir `<head>` isimli üst ifadeye bağlıdır. Ve alt ifadesi yokturç. 
- `<body>` ifadesi iki adet alt ifade (children) sahibidir. Bunlar `<h1>` ve `<a>` ifadeleridir. Aynı zamanda `<html>` üst ifadesine bağlıdır.

------------------------------------------------

## document Öğesi 

Dahili olarak tüm HTML öğelerini kapsayan bir kök (**/root**) ifadesidir. Bu ifade dosyadaki bütün HTML dizilerinin ana dizinidir.

Örnek vermek gerekirse : 

```HTML
document.body.innerHTML = "Some Text";
```

Gövde (`<body>`) DOM (DOCUMENT OBJECT MODEL)'in bir öğesi olduğundan, ona `document` nesnesini kullanarak erişebilir ve `innerHTML` (property) özelliğinin içeriğini değiştirebiliriz.

> document > body > innerHTML

## property

Burada `property` kavramına değinmek gerekir. `property` bir `object` (obje, nesne) nin kendine has tanımlayan özelliğidir diyebiliriz.

Şöyle izah edelim: 

```html
<a href="www....">Some Text</a>
```

`<a>` ifadesinin `href` ve `text` olmak üzere iki `property` si vardır. Yani bu nesneye ait iki özellik mevcuttur ve bu nesneye has özelliklerdir.

## NODES 

DOM'deki her öğenin, DOM'deki ilişkileri hakkında bilgi sağlayan bir dizi özelliği ve yöntemi vardır:


- `element.childNodes`, bir öğenin alt düğümlerinin bir dizisini döndürür.
- `element.firstChild`, bir öğenin ilk alt düğümünü döndürür.
- `element.lastChild,` bir öğenin son alt düğümünü döndürür.
- `element.hasChildNodes`, bir öğenin alt düğümleri varsa true, aksi takdirde false döndürür.
- `element.nextSibling`, aynı ağaç düzeyinde bir sonraki düğümü döndürür.
- `element.previousSibling`, önceki düğümü aynı ağaç düzeyinde döndürür.
- `element.parentNode`, bir öğenin üst düğümünü döndürür.

Örneğin, bir öğenin tüm alt düğümlerini seçebilir ve içeriklerini değiştirebiliriz: