const user = {
    name: "Gokay",
    age: 35
}

// TODO: Object.Assign 
let newUser = Object.assign({}, user, { id: 9999 });

console.log(newUser);