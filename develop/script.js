var startButton = document.querySelector("#start-button");
var questionCard = document.querySelector("#question-cards");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector("#question");
var optionsButtonElement = document.querySelector("answer-buttons");
var points = document.querySelector(".points");
var enterInitialsForm = document.querySelector("#initials-form");
var submitButton = document.querySelector(".form-button");
var scoreboardPlayAgain = document.querySelector("#scoreboard");
var startPage = document.querySelector(".quiz-start");
var initials = document.querySelector("#initials")
var highscoreEl = document.querySelector(".highscore")
var playAgainBtn = document.querySelector("#playagain-btn")

startButton.addEventListener("click", startQuiz);