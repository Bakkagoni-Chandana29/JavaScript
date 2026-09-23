// console.log(2+3);
// variables
var x = 5;
var y = 10;
console.log(x + y);

var name = "John";
var age = 30;
console.log(name+age)

// operators
console.log(3**2) // o/p - 9
var a = 10;
var b = "10";
console.log(a==b)
console.log(a===b)

// loops
for(var i=0; i<5; i++){
    console.log(i);
}

// let 


// functions and const
function myFun(){
    console.log("Function called");
}
myFun();

function add(a,b){
    return a+b;
}
console.log(add(2, 5));

// normal function
const divide = function (a,b){
    return a/b;
}
// anonymous function
const addition = function (a,b){ 
    return a+b;
}
// arrow function
const subtraction = (a,b) => { 
    return a-b;
}
// arrow function - short version
const multiplication = (a,b) => a*b

console.log(addition(3, 4));
console.log(subtraction(5, 2));
console.log(multiplication(3, 4));
console.log(divide(10, 2));
