/*
console.log(document); // returns overall document (url)
console.log(document.head); // returns head block
console.log(document.body); // returns body block

let myData = document.getElementsByTagName("h1") // creates array, finds all h1 tags in the html

console.log(myData[1]); // <h1 class = "heading"> JavaScirpt - Day 4 - DOM (Document Object Model) </h1>
console.log(myData[0].innerText); // count

let display = document.getElementById("display")

console.log(display); // <h1 id = "display"> count </h1>
console.log(display.innerText); // count
*/

let count = 0;
let display = document.getElementById("display")
//display.innerText = count;
// using function
const showCount = () => {
    display.innerText = count;
}

const inCount = () => {
    count++
    showCount()
}

const deCount = () => {
    if(count > 0){
        count--
    }
    showCount()
}
showCount() 


