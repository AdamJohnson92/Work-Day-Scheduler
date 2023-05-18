# Work Day Scheduler

## Description

For this challenge, I added functionality to a daily schedule application, so users can plan out their work days from 9:00 in the morning until 5:00 in the afternoon (17:00).

## Installation

N/A

## Usage

When users load the application, they will see 9 rows, each representing an hour-long time block from 9:00am to 5:00 pm. Users can type a task that they need to do during this timeblock, and save it to the block. If the user closes and re-opens the page, anything that they had saved will still be there. When the day is done, users can click the Clear Schedule button to clear their stored tasks and start again. The scheduler has a timezone accurate clock that displays the date, and the time. 

![alt text](./assets/work%20scheduler%20screenshot.PNG)
[Deployed Scheduler Application (https://adamjohnson92.github.io/Work-Day-Scheduler/)]


## Credits

Starter code with HTML and preloaded JQuery, Bootstrap, and DayJS, courtesy of Bootcamp Spot. Assistance with code provided by BCS tutor Corrado Alfano regarding the for loop that dynamically generated the scheduler elements including the pull from local storage. Additional assistance courtesy of classmate Lavina Castillo regarding the set up of the conditional statement to check the current time against the time block in setting the currentHour variable to represent the dayjs value. 

## License

N/A