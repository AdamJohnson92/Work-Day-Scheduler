var clearScheduleBtn = $("#clearScheduleBtn")
var timeBlock = $(".timeblock")
var schedulerEl = $("#scheduler")
var timeBlockArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
function displayTime() {
    var todayDateTime = $("#currentDay")
    var today = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a');
    todayDateTime.text(today);
  }
//dry code courtesy of tutor Corrado Alfano
for (let i = 0; i < timeBlockArray.length; i++) {
  let mainDiv = $("<div class = 'row time-block'>");
  let timeDiv = $("<div class='col-2 col-md-1 hour text-center py-3'>")
  timeDiv.text(timeBlockArray[i] + ":00");
  
 

  let userMessage = localStorage.getItem(`userSchedule${i}`);
  let textArea = $("<textarea class='col-10 col-md-15 col-sm-8 description task'>")
  textArea.attr("id", `userInput${i}`);
  textArea.text(userMessage);
  let button = $("<button class='btn saveBtn col-1 col-md-1' aria-label='save'>")
  button.text("Save")

  //variable assistance courtesty of classmate Lavina Castillo
  let currentHour = dayjs().format("HH");

if (currentHour > timeBlockArray[i]) {
  textArea.attr("class", "past col-12 col-sm-12 col-md-12 col-lg-10 description task")
} else if (currentHour == timeBlockArray[i]){
  textArea.attr("class", "present col-12 col-sm-12 col-md-12 col-lg-10 description task")
} else {textArea.attr("class", "future col-12 col-sm-12 col-md-12 col-lg-10 description task")}

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
