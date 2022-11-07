window.onload = function() {
    var btn = document.getElementById("demo");
    btn.addEventListener("click", myFunction);

    function myFunction() {
        alert(Math.random());
        // islem calistiktan sonra anlık atama yapılan listener silindi
        btn.removeEventListener("click", myFunction);
        // bir kez daha calistirmayı denediğinizde listener olmadığı için çalışmaz
    }
}