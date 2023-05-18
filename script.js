var clearScheduleBtn = $("#clearScheduleBtn")
var timeBlock = $(".timeblock")
var schedulerEl = $("#scheduler")
var timeBlockArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
//PASTED PLACEHOLDER["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
function displayTime() {
    var todayDateTime = $("#currentDay")
    var today = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a');
    todayDateTime.text(today);
  }
/*<div class="row time-block">
<div class="col-2 col-md-1 hour text-center py-3">9AM</div>
<textarea class="col-5 col-md-15 description task" rows="3" id="task9"> </textarea>
<div class=" col-5 col-md-15 saved-tasks" id="saved-tasks9"></div>
<button class="btn saveBtn col-2 col-md-1" aria-label="save" id="saveBtn9">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>

</div>
*/
//dry code courtesy of tutor Corrado Alfano
for (let i = 0; i < timeBlockArray.length; i++) {
  let mainDiv = $("<div class = 'row time-block'>");
  let timeDiv = $("<div class='col-2 col-md-1 hour text-center py-3'>")
  timeDiv.text(timeBlockArray[i]);
  let timeDisplay = $("<div>")
  timeDisplay.text(`${timeBlockArray[i]}:00`)

  let userMessage = localStorage.getItem(`userSchedule${i}`);
  let textArea = $("<textarea class='col-10 col-md-15 description task'>")
  textArea.attr("id", `userInput${i}`);
  textArea.text(userMessage);
  let button = $("<button class='btn saveBtn col-2 col-md-1' aria-label='save'>")
  button.text("Save")

  //Lavina Castillo
  let currentHour = dayjs().format("HH");

if (currentHour > timeBlockArray[i]) {
  textArea.attr("class", "past col-10 col-md-15 description task")
} else if (currentHour == timeBlockArray[i]){
  textArea.attr("class", "present col-10 col-md-15 description task")
} else {textArea.attr("class", "future col-10 col-md-15 description task")}

//   conditional statement
//   if (dayjs().isBefore(timeBlockArray[i], "hour")) {
//     textArea.attr("class", "future")
//   } else if (dayjs().isSame(timeBlockArray[i], "hour")){
//     textArea.attr("class", "present")
//   } else {
//     textArea.attr("class", "past col-10 col-md-15 description task")
//   }
// console.log(this)

  timeDiv.append(timeDisplay)

  mainDiv.append(timeDiv, textArea, button)

  schedulerEl.append(mainDiv) 
}

$(".saveBtn").on("click", function() {
  for (let x = 0; x < timeBlockArray.length; x++) {
    let textAreaValue = $(`#userInput${x}`).val();
    localStorage.setItem(`userSchedule${x}`,textAreaValue)
    
  }
})

function cleartasks(){
  localStorage.clear()
  location.reload()
}

clearScheduleBtn.on("click", cleartasks)

displayTime();
setInterval(displayTime, 1000)

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  
});