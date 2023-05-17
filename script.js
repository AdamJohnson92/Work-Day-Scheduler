var clearScheduleBtn = $("#clearScheduleBtn")
var saveBtn9 = $("#saveBtn9")
var saveBtn10 = $("#saveBtn10")
var saveBtn11 = $("#saveBtn11")
var saveBtn12 = $("#saveBtn12")
var saveBtn13 = $("#saveBtn13")
var saveBtn14 = $("#saveBtn14")
var saveBtn15 = $("#saveBtn15")
var saveBtn16 = $("#saveBtn16")
var saveBtn17 = $("#saveBtn17")
var task9El = $("#task9")
var task10El = $("#task10")
var task11El = $("#task11")
var task12El = $("#task12")
var task13El = $("#task13")
var task14El = $("#task14")
var task15El = $("#task15")
var task16El = $("#task16")
var task17El = $("#task17")
var timeBlock = $(".timeblock")
var savedItemList9 = []
var savedItemList10 = []
var savedItemList11 = []
var savedItemList12 = []
var savedItemList13 = []
var savedItemList14 = []
var savedItemList15 = []
var savedItemList16 = []
var savedItemList17 = []
var savedTasks9El = $("#saved-tasks9")
var savedTasks10El = $("#saved-tasks10")
var savedTasks11El = $("#saved-tasks11")
var savedTasks12El = $("#saved-tasks12")
var savedTasks13El = $("#saved-tasks13")
var savedTasks14El = $("#saved-tasks14")
var savedTasks15El = $("#saved-tasks15")
var savedTasks16El = $("#saved-tasks16")
var savedTasks17El = $("#saved-tasks17")


var schedulerEl = $("#scheduler")
var timeBlockArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

function displayTime() {
    var todayDateTime = $("#currentDay")
    var today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
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

  let userMessage = localStorage.getItem(`userSchedule${i}`);
  let textArea = $("<textarea class='col-5 col-md-15 description task' rows='3'>")
  textArea.attr("id", `userInput${i}`);
  textArea.text(userMessage);
  let button = $("<button class='btn saveBtn col-2 col-md-1' aria-label='save'>")

  //conditional statement

  mainDiv.append(timeDiv, textArea, button)

  schedulerEl.append(mainDiv) 
}



$(".saveBtn").on("click",() => {
  for (let x = 0; x < timeBlockArray.length; x++) {
    let textAreaValue = $(`#userInput${x}`).val();
    localStorage.setItem(`userSchedule${x}`,textAreaValue)
    
  }
})

//9--------------------------------------------------------------
function handleTaskSave9(){
  var task = task9El.val()
  console.log(task)
  savedItemList9.push(task)
  localStorage.setItem("task9", JSON.stringify(savedItemList9))
  task9El.val("")
}
 
function renderSavedTasks9(){
  // TA helped with the fallback value
  savedItemList9 = JSON.parse(localStorage.getItem("task9")) || []
  savedTasks9El.text(savedItemList9)
  }

saveBtn9.on("click", handleTaskSave9)
saveBtn9.on("click", renderSavedTasks9)
//10-------------------------------------------------------------
function handleTaskSave10(){
  var task = task10El.val()
  console.log(task)
  savedItemList10.push(task)
  console.log(savedItemList10)
  localStorage.setItem("task10", JSON.stringify(savedItemList10)) 
  task10El.val("")
}
 
function renderSavedTasks10(){
// TA helped with the fallback value
savedItemList10 = JSON.parse(localStorage.getItem("task10")) || []
savedTasks10El.text(savedItemList10)
}
saveBtn10.on("click", handleTaskSave10)
saveBtn10.on("click", renderSavedTasks10)

//11--------------------------------------------------------------
function handleTaskSave11(){
  var task = task11El.val()
  console.log(task)
  savedItemList11.push(task)
  localStorage.setItem("task11", JSON.stringify(savedItemList11)) 
  task11El.val("")
}
 
function renderSavedTasks11(){
// TA helped with the fallback value
savedItemList11 = JSON.parse(localStorage.getItem("task11")) || []
savedTasks11El.text(savedItemList11)
}
saveBtn11.on("click", handleTaskSave11)
saveBtn11.on("click", renderSavedTasks11)
//12---------------------------------------------------------------
function handleTaskSave12(){
  var task = task12El.val()
  console.log(task)
  savedItemList12.push(task)
  console.log(savedItemList12)
  localStorage.setItem("task12", JSON.stringify(savedItemList12)) 
  task12El.val("")
}
 
function renderSavedTasks12(){
// TA helped with the fallback value
savedItemList12 = JSON.parse(localStorage.getItem("task12")) || []
savedTasks12El.text(savedItemList12)
}
saveBtn12.on("click", handleTaskSave12)
saveBtn12.on("click", renderSavedTasks12)
//13----------------------------------------------------------------
function handleTaskSave13(){
  var task = task13El.val()
  console.log(task)
  savedItemList13.push(task)
  console.log(savedItemList13)
  localStorage.setItem("task13", JSON.stringify(savedItemList13)) 
  task13El.val("")
}
 
function renderSavedTasks13(){
// TA helped with the fallback value
savedItemList13 = JSON.parse(localStorage.getItem("task13")) || []
savedTasks13El.text(savedItemList13)
}
saveBtn13.on("click", handleTaskSave13)
saveBtn13.on("click", renderSavedTasks13)
//14------------------------------------------------------------------
function handleTaskSave14(){
  var task = task14El.val()
  console.log(task)
  savedItemList14.push(task)
  console.log(savedItemList14)
  localStorage.setItem("task14", JSON.stringify(savedItemList14)) 
  task14El.val("")
}
 
function renderSavedTasks14(){
// TA helped with the fallback value
savedItemList14 = JSON.parse(localStorage.getItem("task14")) || []
savedTasks14El.text(savedItemList14)
}
saveBtn14.on("click", handleTaskSave14)
saveBtn14.on("click", renderSavedTasks14)
//15-------------------------------------------------------------------
function handleTaskSave15(){
  var task = task15El.val()
  console.log(task)
  savedItemList15.push(task)
  console.log(savedItemList15)
  localStorage.setItem("task15", JSON.stringify(savedItemList15)) 
  task15El.val("")
}
 
function renderSavedTasks15(){
// TA helped with the fallback value
savedItemList15 = JSON.parse(localStorage.getItem("task15")) || []
savedTasks15El.text(savedItemList15)
}
saveBtn15.on("click", handleTaskSave15)
saveBtn15.on("click", renderSavedTasks15)
//16------------------------------------------------------------------
function handleTaskSave16(){
  var task = task16El.val()
  console.log(task)
  savedItemList16.push(task)
  console.log(savedItemList16)
  localStorage.setItem("task16", JSON.stringify(savedItemList16)) 
  task16El.val("")
}
 
function renderSavedTasks16(){
// TA helped with the fallback value
savedItemList16 = JSON.parse(localStorage.getItem("task16")) || []
savedTasks16El.text(savedItemList16)
}
saveBtn16.on("click", handleTaskSave16)
saveBtn16.on("click", renderSavedTasks16)
//17------------------------------------------------------------------
function handleTaskSave17(){
  var task = task17El.val()
  console.log(task)
  savedItemList17.push(task)
  console.log(savedItemList17)
  localStorage.setItem("task17", JSON.stringify(savedItemList17)) 
  task17El.val("")
}

function renderSavedTasks17(){
// TA helped with the fallback value
savedItemList17 = JSON.parse(localStorage.getItem("task17")) || []
savedTasks17El.text(savedItemList17)
}
saveBtn17.on("click", handleTaskSave17)
saveBtn17.on("click", renderSavedTasks17)
//-------------------------------------------------------
function setClass(){
if(dayjs().isAfter(nine)){
  $(timeblock).addClass(".past")
}
}

function cleartasks(){
  localStorage.clear()
  renderSavedTasks9()
  renderSavedTasks10()
  renderSavedTasks11()
  renderSavedTasks12()
  renderSavedTasks13()
  renderSavedTasks14()
  renderSavedTasks15()
  renderSavedTasks16()
  renderSavedTasks17()
}

clearScheduleBtn.on("click", cleartasks)

displayTime();
setInterval(displayTime, 1000)
renderSavedTasks9();
renderSavedTasks10();
renderSavedTasks11();
renderSavedTasks12();
renderSavedTasks13();
renderSavedTasks14();
renderSavedTasks15();
renderSavedTasks16();
renderSavedTasks17();
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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