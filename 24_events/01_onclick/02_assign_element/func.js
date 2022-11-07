// döküman çalıştığı gibi fonksiyon calistir 
window.onload = function(){
    // element id si demo olan nesneyi elemanı bul
    var x = document.getElementById("demo");

    // bulunan elemana tıklandığı anda fonksiyon calistir 
    x.onclick = function(){
        // dom üzerinden innerHTML de sistem tarih ve saatini yazdır
        document.body.innerHTML = Date();
    }

}