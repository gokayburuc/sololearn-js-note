function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here

    //var depth = 128;
    var distance = 0;

    // eger distance derinligi gecerse dur 

    for (let day = 1; day < 100000000000; day++) {
        distance = distance + 7
        if (distance >= depth) {
            console.log(day, " : ", distance);
            // if distance bigger than depth break
            break
        }
        distance -= 2;
    }
}

main();
