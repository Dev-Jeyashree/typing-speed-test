const testTextElement = document.getElementById("testText");
const typingArea = document.getElementById("typingArea");
const startBtn = document.getElementById("startBtn");
const timeLeftElement = document.getElementById("timeLeft");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const charsTypedElement = document.getElementById("charsTyped");
const leaderboardBody = document.querySelector("#leaderboard tbody");
const playerNameInput = document.getElementById("playerName");

let timeLeft = 60;
let timerId = null;
let isRunning = false;

function resetTest() {
	timeLeft = 60;
	timeLeftElement.textContent = timeLeft.toString();
	typingArea.value = "";
	typingArea.disabled = true;
	isRunning = false;
	wpmElement.textContent = "0";
	accuracyElement.textContent = "0";
	charsTypedElement.textContent = "0";
}

function calculateStats() {
	const original = testTextElement.textContent;
	const typed = typingArea.value;

	const totalChars = typed.length;
	let correctChars = 0;
	for (let i = 0; i < Math.min(original.length, typed.length); i++) {
		if (original[i] === typed[i]) correctChars++;
	}

	const accuracy = totalChars === 0 ? 0 : (correctChars / totalChars) * 100;

	const timeUsed = 60 - timeLeft;
	const minutes = timeUsed / 60 || 1; // avoid division by zero
	const words = typed.trim().split(/\s+/).filter(w => w.length > 0).length;
	const wpm = Math.round(words / minutes);

	return {
		wpm,
		accuracy: parseFloat(accuracy.toFixed(2)),
		totalChars,
		correctChars
	};
}

function updateStatsUI(stats) {
	wpmElement.textContent = stats.wpm.toString();
	accuracyElement.textContent = stats.accuracy.toString();
	charsTypedElement.textContent = stats.totalChars.toString();
}

function startTest() {
	const name = playerNameInput.value.trim();
	if (!name) {
		alert("Please enter your name before starting.");
		return;
	}

	if (isRunning) return;
	isRunning = true;
	typingArea.disabled = false;
	typingArea.focus();

	timerId = setInterval(() => {

		timeLeft--;
		if (timeLeft <= 0) {
			timeLeft = 0;
		}
		timeLeftElement.textContent = timeLeft;

		const stats = calculateStats();
		updateStatsUI(stats);

		if (timeLeft === 0) {
			clearInterval(timerId);
			typingArea.disabled = true;
			isRunning = false;

			// Play sound
			timerSound.currentTime = 0;  // rewind to start
			timerSound.play();

			const finalStats = calculateStats();
			updateStatsUI(finalStats);
			sendResultToServer(name, finalStats);
		}
	}, 1000);

}

function sendResultToServer(name, stats) {
	fetch("/api/results", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			playerName: name,
			wpm: stats.wpm,
			accuracy: stats.accuracy,
			totalChars: stats.totalChars,
			correctChars: stats.correctChars
		})
	})
		.then(res => res.json())
		.then(() => loadLeaderboard())
		.catch(err => console.error("Error saving result", err));
}

function loadLeaderboard() {
	fetch("/api/results/top?limit=10")
		.then(res => res.json())
		.then(data => {
			leaderboardBody.innerHTML = "";
			data.forEach((result, index) => {
				const row = document.createElement("tr");
				row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${result.playerName}</td>
                    <td>${result.wpm}</td>
                    <td>${result.accuracy.toFixed(2)}%</td>
                `;
				leaderboardBody.appendChild(row);
			});
		})
		.catch(err => console.error("Error loading leaderboard", err));
}

startBtn.addEventListener("click", () => {
	resetTest();
	startTest();
});

window.addEventListener("load", () => {
	resetTest();
	loadLeaderboard();
});
