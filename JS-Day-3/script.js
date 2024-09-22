// if-else statement

let x=5;
let y=6;

if (x > y) {
    console.log("x is greater than y");
} else{
    console.log("y is greater than or equal to x");
}

// switch statement

let z=2;

switch (z) {
    case 1:
        console.log("z is 1");
        break;
    case 2:
        console.log("z is 2");
        break;
    case 3:
        console.log("z is 3");
        break;
    default:
        console.log("z is not 1, 2, or 3");
}

// Handling multiple conditions

let a=5;
let b=10;

if (a > 0 && b > 0) {
    console.log("Both a and b are positive");
} else if (a < 0 && b < 0) {
    console.log("Both a and b are negative");
} else {
    console.log("At least one of a or b is negative");
}