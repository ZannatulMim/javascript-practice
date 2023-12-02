// 2 parameter

// function add(num1, num2) {
//     console.log("going to add:", num1, num2)
// }

// add(12, 5);



// function add(number1, number2) {
//     var sum = number1 + number2;
//     console.log(sum);
// }

// add(3, 4);

function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 3;
const assignment2marks = 4;
const assignment3marks = 5;

var myaverage = getAverage(assignment1Marks, assignment2marks, assignment3marks);
console.log(myaverage);