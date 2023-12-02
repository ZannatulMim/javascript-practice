// function myFunction() {
//     console.log("welcome");
//     console.log("hi");
//     console.log("welcome");
//     console.log("hi");

// }

// myFunction();
// myFunction();
// myFunction();


// function add(num1, num2) {
//     console.log(num1, num2)
//     var sum = num1 + num2;
//     console.log(sum);
//     return;
// }

// add(100, 200);
// console.log(add);

function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}


const assignment1marks = 10;
const assignment2marks = 20;
const assignment3marks = 30;


var myaverage = getAverage(assignment1marks, assignment2marks, assignment3marks);
console.log(myaverage);




