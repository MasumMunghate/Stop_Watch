const timerEl = document.getElementById("timer");
        const startButtonEl = document.getElementById("start");
        const stopButtonEl = document.getElementById("stop");
        const resetButtonEl = document.getElementById("reset");

        let startTime = 0;
        let elapsedTime = 0;
        let timerInterval;

        function startTimer() {
            startTime = Date.now() - elapsedTime;

            timerInterval = setInterval(updateTime, 10);

            startButtonEl.disabled = true;
            stopButtonEl.disabled = false;
        }

        function updateTime() {
            elapsedTime = Date.now() - startTime;
            timerEl.textContent = formatTime(elapsedTime);
        }

        function formatTime(elapsedTime) {
            const milliseconds = Math.floor((elapsedTime % 1000) / 10);
            const seconds = Math.floor((elapsedTime / 1000) % 60);
            const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
            const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
        }

        function stopTimer() {
            clearInterval(timerInterval);
            startButtonEl.disabled = false;
            stopButtonEl.disabled = true;
        }

        function resetTimer() {
            clearInterval(timerInterval);
            elapsedTime = 0;
            timerEl.textContent = "00:00:00";
            startButtonEl.disabled = false;
            stopButtonEl.disabled = true;
        }

        startButtonEl.addEventListener("click", startTimer);
        stopButtonEl.addEventListener("click", stopTimer);
        resetButtonEl.addEventListener("click", resetTimer);