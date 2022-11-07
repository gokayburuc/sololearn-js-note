//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");

    // p1 remove
    parent.removeChild(child);

    // alternative
    // child.parentNode.removeChild(child);
};


//onload function
// window.onload = function(){
//     var parent = document.getElementById("demo");
//     var child = document.getElementById("p1");
//     parent.removeChild(child);
// };