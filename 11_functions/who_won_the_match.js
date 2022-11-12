function main() {
    var goalsTeam1 = parseInt(readLine(), 10);
    var goalsTeam2 = parseInt(readLine(), 10);
    // function call
    finalResult(goalsTeam1, goalsTeam2)

}
//complete the function
function finalResult(home, away) {
    if (home > away) {
        console.log("Team 1 won");
    } else if (home == away) {
        console.log("Draw");
    } else {
        console.log("Team 2 won");
    }

};