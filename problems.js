//Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of two numbers is 100

//Solution # 1
var a = parseInt(prompt("Enter first value: "));
var b = parseInt(prompt("Enter second value: "));
if (a == 100 || b == 100) {
    console.log(true);
} else if ((a + b) == 100) {
    console.log(true);
} else {
    console.log(false);
}

//Solution # 2
var checkIfEqualTo100 = (a, b) => {
    if (a == 100 || b == 100) {
        return true;
    } else {
        return false;
    }
}
console.log(checkIfEqualTo100(100, 0));

//Solution # 3
var checkIfEqualTo100 = (a, b) => a == 100 || b == 100;

console.log(checkIfEqualTo100(2, 100));


