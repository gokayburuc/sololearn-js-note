const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7, 8];

// let arr3 = [arr1, 4, ...arr2];
// ...arr ifadesi diziyi genişletir ve array eklemez 
// arr ifadesi ise yeni bir array olarak ekler 

let arr3 = [...arr1, 4, ...arr2];

console.log(arr3);