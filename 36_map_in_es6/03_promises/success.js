new Promise(function (resolve, reject) {
    // TODO : promises konusuna tekrar bak ve incele 
    // Work
    if (success)
        resolve(result);
    else
        reject(Error("failure"));

}); 