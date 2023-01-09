// variables
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

// click function on start button
startButton.addEventListener("click", startQuiz);

var timer;
var timerCount;
var quizOver;
var index = 0;
var pointCounter = 0;

var questions = [
  {
    question: "The .addEventListener method is used to ___.",
    options: ["call a function whenever the specified event is delivered to the target", "add music to the webpage", "remove an event listener from a target", "decode specific text encoding"],
    answer: 0,
  },
  {
    question: "What is a variable?",
    options: ["a block of code designed to perform a specific task", "storage for a collection of multiple items", "a container for a value", "a method to remove an element from the beginning of an array"],
    answer: 2,
  },
  {
    question: "What function can you use to create a timer in javascript?",
    options: [".createInterval()", ".startTimer()", ".setTimer()", ".setInterval()"],
    answer: 3,
  },
  {
    question: "What is the difference between .textContent and .innerHTML?",
    options: [".innerHTML gets content from both HTML and CSS", "there's not much of a difference", ".textContent can only be used on Sundays", ".textContent only gets content from <p> elements, while .innerHTML gets content from all elements"],
    answer: 1,
  },
];

function startQuiz() {
    quizOver = false;
    timerCount = 60;
    startButton.classList.add("hide");
    questionCard.classList.remove("hide");
    startTimer();
    takeQuiz();
}