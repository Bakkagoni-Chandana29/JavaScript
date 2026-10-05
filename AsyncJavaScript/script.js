
let a = 10;
let b = 0;
let c = a/b;
console.log(c); // This will output Infinity because dividing a number by zero in JavaScript results in Infinity.

// using try catch
try {
    let t = a/b;
    console.log(t); 
}
catch (error) {
    console.log(error.name);
}
finally {
    console.log("This will always run");
}
//console.log(t);


// Array Methods
let arr = [10, 30, 4, 6, 74.3];

// Higher Order Function because it accepts another function as an argument.
arr.forEach(() => {});

console.log(arr) // This will output the original array: [10, 30, 4, 6, 74.3]

arr.forEach((value) => {
    console.log(value);
});

arr.push(100); // adds at end
arr.pop(); // removes from end

arr.unshift(5); // adds at beginning
arr.shift(); // removes from beginning

//setInterval() vs setTimeout()
const myFun = () => {
    console.log("Function Called")
};

setInterval(myFun, 2000) // executes repeatedly every 2 seconds until stopped.
setTimeout(myFun, 2000) // executes once after 2 seconds.

// You can stop an interval using
/*
let id = setInterval(myFun, 2000);
clearInterval(id);
*/

// object syntax
/*
name = {
    key:value
}
name.key=value
*/
//example
/*
let person = {
    name: "Chandana",
    age: 20
};
console.log(person.name);
person.age = 21;
console.log(person);
*/

// fetch() is used to request data from a server/API.
// fetch("").then().catch();

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => response.json())
    .then((data) => console.log(data))

/*
fetch("https://fakestoreapi.com/products/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err)
    })
*/
