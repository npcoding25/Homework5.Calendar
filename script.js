var currentDay = document.querySelector("#currentDay")
var currentTime = document.querySelector("#currentTime")
currentDay.textContent = moment().format('MMMM Do YYYY')
currentTime.textContent = moment().format('LT')
console.log(currentDay.textContent)
// var saveEntry = $("")

var time = document.querySelector(".time-block")
function showColor() {
    if (time.value == currentTime) {
        time.classList.add("present")
    }
    if (time.value < currentTime) {
        time.classList.add("past")
    }
    if (time.value > currentTime) {
        time.classList.add("future")
    }
}

var info = document.querySelector("textarea").value
var todos = JSON.parse(localStorage.info)
todos.push(info)
localStorage.info = JSON.stringify(todos)
