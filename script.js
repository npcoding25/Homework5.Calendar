// Variables for placing current day and time
var currentDay = document.querySelector("#currentDay")
var currentTime = document.querySelector("#currentTime")

// Getting date from moment.js
currentDay.textContent = moment().format('MMMM Do YYYY')

// Getting time from moment.js
currentTime.textContent = moment().format('LT')

// Loop through time ids and compare to the time given by moment.js
// Using info have different colours for past, present, future
function showColor() {
    for ( var i=9; i<19; i++) {
        var time = i
        if (time == moment().format('H')) {
            $("#time"+ i).addClass("present").removeClass("past", )
        }
        if (time < moment().format('H')) {
            $("#time"+ i).addClass("past")
        }
        if (time > moment().format('H')) {
            $("#time"+ i).addClass("future")
        }
    }
}
showColor();

// Saving inputs to local storage
$("#saveBtn1").on("click", () => localStorage.text1 = $("#text1").val())
$("#saveBtn2").on("click", () => localStorage.text2 = $("#text2").val())
$("#saveBtn3").on("click", () => localStorage.text3 = $("#text3").val())
$("#saveBtn4").on("click", () => localStorage.text4 = $("#text4").val())
$("#saveBtn5").on("click", () => localStorage.text5 = $("#text5").val())
$("#saveBtn6").on("click", () => localStorage.text6 = $("#text6").val())
$("#saveBtn7").on("click", () => localStorage.text7 = $("#text7").val())
$("#saveBtn8").on("click", () => localStorage.text8 = $("#text8").val())
$("#saveBtn9").on("click", () => localStorage.text9 = $("#text9").val())
$("#saveBtn10").on("click", () => localStorage.text10 = $("#text10").val())
  
// Loop through local storage and show previously saved tasks
function getSavedTasks() {
    for (let i=1; i<11; i++)
    $("#text"+ i).val(localStorage.getItem("text"+ i))
}
getSavedTasks()