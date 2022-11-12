function main() {
    var name = "Bob";
    var position = "Developer";

    let employees = new Map([
        ["Richard", "Developer"],
        ["Maria", "SEO Specialist"],
        ["Tom", "Product Manager"],
        ["David", "Accountant"],
        ["Sophia", "HR Manager"]
    ]);

    // add the new pair to the map 
    employees.set(name, position);

    // show employees Map
    for (var i of employees.entries()) {
        console.log(i[0], ":", i[1]);
    }
};

main();

