var currentDay = document.querySelector("#currentDay")
var currentTime = document.querySelector("#currentTime")
currentDay.textContent = moment().format('MMMM Do YYYY')
currentTime.textContent = moment().format('LT')
console.log(currentDay.textContent)

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
$("#saveBtn1").on("click", function(){
    localStorage.text1 = $("#text1").val()
})


$("#saveBtn2").on("click", function(){
    localStorage.text2 = $("#text2").val()
})

$("#saveBtn3").on("click", function(){
    localStorage.text3 = $("#text3").val()
})

$("#saveBtn4").on("click", function(){
    localStorage.text4 = $("#text4").val()
})

$("#saveBtn5").on("click", function(){
    localStorage.text5 = $("#text5").val()
})

$("#saveBtn6").on("click", function(){
    localStorage.text6 = $("#text6").val()
})

$("#saveBtn7").on("click", function(){
    localStorage.text7 = $("#text7").val()
})

$("#saveBtn8").on("click", function(){
    localStorage.text8 = $("#text8").val()
})

$("#saveBtn9").on("click", function(){
    localStorage.text9 = $("#text9").val()
})

$("#saveBtn10").on("click", function(){
    localStorage.text10 = $("#text10").val()
})
                    
function getSavedTasks() {
    $("#text1").val(localStorage.getItem("text1"))
    $("#text2").val(localStorage.getItem("text2"))
    $("#text3").val(localStorage.getItem("text3"))
    $("#text4").val(localStorage.getItem("text4"))
    $("#text5").val(localStorage.getItem("text5"))
    $("#text6").val(localStorage.getItem("text6"))
    $("#text7").val(localStorage.getItem("text7"))
    $("#text8").val(localStorage.getItem("text8"))
    $("#text9").val(localStorage.getItem("text9"))
    $("#text10").val(localStorage.getItem("text10"))
}
getSavedTasks()