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

// DAY - 3
// var
var a=10;
var a=20;
console.log(a);

// let 
let z = 20;
//let z = 30; // error - cannot redeclare a let variable
z = 30; // allowed - can reassign a let variable
console.log(z);

// const
const c = 50;
// c = 60; // error - cannot reassign a const variable
// const c = 60; // error - cannot redeclare a const variable
console.log(c);

// functions
function myFun(){
    console.log("Function called");
}
myFun();

// with parameter
// function add(a,b){
//     return a+b;
// }
// console.log(add(10, 5));

// normal function
const divide = function add(a,b){
    return a/b;
}
console.log(divide(10, 5))

// anonymous function
const addition = function (a,b){ 
    return a+b;
}
console.log(addition(3, 4));

// arrow function
const subtraction = (a,b) => { 
    return a-b;
}
console.log(subtraction(5, 2));

// arrow function - short version
const multiplication = (a,b) => a*b
console.log(multiplication(3, 4));

// Arrays

let arr = [10, "hello", "bye",true, 3.68]
let arr2 = [100, 200]

let newArr = [...arr, 90, ...arr2, 50] // spread operator
console.log(newArr);

arr[0] = 20;
console.log(arr[0]); 
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

let obj = {
    id : 1,
    name : "Chandu",
    city : "HYD"
}
console.log(obj.name);
console.log(obj);

let data = [
    {
        id : 1,
        name : "Chandu"
    },
    {
        id : 2,
        name : "Anjali"
    }
]
console.log(data[0].name);
console.log(data[1].id);

