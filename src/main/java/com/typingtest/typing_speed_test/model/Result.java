package com.typingtest.typing_speed_test.model;

import java.time.LocalDateTime;

public class Result {
    private String playerName;
    private int wpm;
    private double accuracy;
    private int totalChars;
    private int correctChars;
    private LocalDateTime createdAt = LocalDateTime.now();

    // getters and setters
    public String getPlayerName() { return playerName; }
    public void setPlayerName(String playerName) { this.playerName = playerName; }

    public int getWpm() { return wpm; }
    public void setWpm(int wpm) { this.wpm = wpm; }

    public double getAccuracy() { return accuracy; }
    public void setAccuracy(double accuracy) { this.accuracy = accuracy; }

    public int getTotalChars() { return totalChars; }
    public void setTotalChars(int totalChars) { this.totalChars = totalChars; }

    public int getCorrectChars() { return correctChars; }
    public void setCorrectChars(int correctChars) { this.correctChars = correctChars; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
