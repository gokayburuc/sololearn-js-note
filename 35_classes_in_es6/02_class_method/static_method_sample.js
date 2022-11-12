function main() {
    // var exam1 = parseInt(readLine(), 10);
    // var exam2 = parseInt(readLine(), 10);
    // var exam3 = parseInt(readLine(), 10);

    var exam1 = 50;
    var exam2 = 60;
    var exam3 = 65;


    console.log(Exams.average(exam1, exam2, exam3));

}
class Exams {
    //your code goes here

    static average(a, b, c) {
        const avg = (a + b + c) / 3
        return Math.round(avg);
    }

}