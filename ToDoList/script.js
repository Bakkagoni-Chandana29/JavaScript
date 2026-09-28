/*
let data = []
const addTask = () => {
    let userInput = document.getElementById("user-input")
    data.push(userInput.value)
    console.log(data)
} 
*/

let data = []
let userInput = document.getElementById("user-input")
let display = document.getElementById("display")
const addTask = () => {
    data.push(userInput.value)
    display.innerHTML = ""
    data.map(task => {
        display.innerHTML += `<li>${task}</li>`
    })
    userInput.value = ""
}