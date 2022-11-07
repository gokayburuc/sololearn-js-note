# CAPTURING BUBBLING - EVENT PROPAGATION

HTML DOM'de olay yaymanın iki yolu vardır: 
köpürme - Bubbling 
yakalama - Capturing

Olay yayılımı, bir olay meydana geldiğinde eleman sırasının tanımlanmasına izin verir. Bir `<div>` öğesinin içinde bir `<p>` öğeniz varsa ve kullanıcı `<p>` öğesini tıklarsa, önce hangi öğenin "click" olayı ele alınmalıdır?

Köpürmede, önce en içteki elemanın olayı işlenir ve sonra dış elemanın olayı işlenir. Önce `<p>` öğesinin tıklama olayı, ardından `<div>` öğesinin tıklama olayı işlenir.

Yakalamada, önce en dıştaki öğenin olayı, ardından içteki olay ele alınır. Önce `<div>` öğesinin click olayı, ardından `<p>` öğesinin click olayı işlenir.

> Yakalama, DOM'den aşağı iner.
> Kabarcıklanma DOM'da yükselir.