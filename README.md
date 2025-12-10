# ⌨️ Typing Speed Test – Web App

A modern **Typing Speed Test** web application built with **Java (Spring Boot)** on the backend and **HTML, CSS, and JavaScript** on the frontend.

It lets users test their typing speed, measures **WPM (Words Per Minute)**, **Accuracy**, and **Characters typed**, and stores their best scores in a **Leaderboard**.

---

## 🚀 Features

- 🧑‍💻 Enter player name and take a 60-second typing test  
- ⏱️ Countdown timer with **sound alert** when time is up  
- 📊 Live stats:
  - Words Per Minute (WPM)  
  - Accuracy (%)  
  - Total characters typed  
- 🏆 Leaderboard:
  - Stores results in backend  
  - Displays Top 10 players (by WPM)  
- 🎨 Custom two-column UI:
  - Left: Typing test area  
  - Right: Leaderboard  
  - Modern layout with clean, minimal design  

---

## 🛠 Tech Stack

### Backend
- Java  
- Spring Boot  
- Spring Web (REST APIs)  

### Frontend
- HTML5  
- CSS3  
- Vanilla JavaScript (ES6)

### Tools
- Maven  
- Git & GitHub  
- IntelliJ IDEA / Eclipse  
- Browser: Chrome / Edge  

---

## 📁 Project Structure (Important Parts)

```text
typing-speed-test/
├─ pom.xml
├─ src/
│  ├─ main/
│  │  ├─ java/com/typingtest/typing_speed_test/
│  │  │  ├─ TypingSpeedTestApplication.java
│  │  │  ├─ controller/ResultController.java
│  │  │  ├─ model/Result.java
│  │  │  └─ service/ResultService.java
│  │  ├─ resources/
│  │  │  ├─ application.properties
│  │  │  └─ static/
│  │  │     ├─ index.html
│  │  │     ├─ styles.css
│  │  │     ├─ app.js
│  │  │     └─ alarm.mp3
│  └─ test/
│     └─ ...
🔌 API Endpoints (Backend)
The frontend communicates with the backend using REST APIs.

POST /api/results
Saves a new typing test result.

Request body (JSON):

json
Copy code
{
  "playerName": "Jey",
  "wpm": 45,
  "accuracy": 92.5,
  "totalChars": 230,
  "correctChars": 213
}
GET /api/results/top?limit=10
Returns top N results (default 10)

Used to populate the leaderboard.

▶️ How to Run the Project Locally

1️⃣ Prerequisites
Java 17+ (or the version used in pom.xml)

Maven installed (mvn -v should work in terminal)

2️⃣ Clone the Repository
git clone https://github.com/Dev-Jeyashree/typing-speed-test.git
cd typing-speed-test

3️⃣ Build and Run the Spring Boot App
mvn clean install
mvn spring-boot:run
By default, Spring Boot runs on:

http://localhost:8080

4️⃣ Open the Web App
The frontend is served from the static folder.

Open your browser and go to:

http://localhost:8080/index.html
(or just http://localhost:8080 if Spring Boot auto-serves index.html)

You should see:

Left: Typing Speed Test UI

Right: Leaderboard

When you click Start Test (60s):

Timer starts

You can type in the box

WPM, Accuracy, and character count update

When time is up, a sound plays and result is sent to backend

Leaderboard refreshes with the new score

🧪 Future Improvements
Different difficulty levels (Easy / Medium / Hard paragraphs)

User authentication and personal test history

Dark mode / theme toggle

Multi-language support

Cloud deployment (Render / AWS / Azure) with public demo URL

👩‍💻 Author
Jeyashree
Aspiring Java Full Stack Developer

GitHub: Dev-Jeyashree

LinkedIn: https://www.linkedin.com/in/dev-jeyashree/

“The future belongs to those who consistently improve themselves.”

