const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

const clonedObj = { ...obj1 };// clone obj1
const mergedObj = { ...obj1, ...obj2 }; // merge two object

console.log(mergedObj); // merged object foo:'baz' degeri foo'nun son degiskeninden gelir
console.log(clonedObj);

