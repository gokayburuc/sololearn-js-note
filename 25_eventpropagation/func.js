//Capturing propagation
elem1.addEventListener("click", myFunction, true); 


//Bubbling propagation
elem2.addEventListener("click", myFunction, false);



addEventListener(event, function, useCapture)