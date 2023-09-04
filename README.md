# Stop_Watch

The code starts by getting references to HTML elements: timerEl, startButtonEl, stopButtonEl, and resetButtonEl.

It initializes timer-related variables: startTime (the time when the timer started), elapsedTime (the time that has elapsed since the timer started), and timerInterval (the interval that updates the timer display).

The startTimer function is called when the "Start" button is clicked. It calculates the startTime based on the current time and elapsedTime. It sets up an interval (timerInterval) to call the updateTime function every 10 milliseconds. It also disables the "Start" button and enables the "Stop" button.

The updateTime function calculates the elapsedTime since the start and formats it into hours, minutes, seconds, and milliseconds using the formatTime function. It updates the timerEl element with the formatted time.

The formatTime function takes the elapsed time and formats it into a string in the format "HH:MM:SS.SS" (hours, minutes, seconds, and milliseconds).

The stopTimer function is called when the "Stop" button is clicked. It clears the timer interval, stopping the timer's updates. It also enables the "Start" button and disables the "Stop" button.

The resetTimer function is called when the "Reset" button is clicked. It clears the timer interval, resets the elapsedTime to zero, updates the timer display to "00:00:00", and enables the "Start" button while disabling the "Stop" button.

Event listeners are added to the buttons to trigger the corresponding timer functions when clicked.

this code creates a timer with start, stop, and reset functionality. The timer displays hours, minutes, seconds, and milliseconds, and it updates in real-time. Users can start, stop, and reset the timer using the provided buttons.
