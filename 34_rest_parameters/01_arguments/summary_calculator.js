// complete the function 

function Add(arr, ...nums) {
    var sum = 0;
    // TODO: for ... of döngüsüne tekrar bakılacak 
    for (let num of nums) {
        sum += num;
    }
    return sum;

};


// argument olarak yazim 
// function Add(arr) {
//     var sum = 0;
//     for (let k = 0; k < arguments.length; k++) {
//         let element = arguments[k];
//         sum += element;
//     }

//     return sum;

// }

console.log(Add(1, 2, 3));
console.log(Add(4, 14, 5, 9, 14));
console.log(Add(2, 36));
