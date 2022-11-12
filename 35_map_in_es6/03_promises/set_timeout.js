setTimeout(function () {

    // ilk olarak work 1 calisacak 
    console.log("Work 1");

    // daha sonra work2 calisacak 
    setTimeout(function () {
        console.log("Work 2");
    }, 1000);
}, 1000);
console.log("End");