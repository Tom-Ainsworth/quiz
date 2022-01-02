// Array of quiz questions
const questions = [{
    title: "Question 1",
    optionA: "a",
    optionB: "b",
    optionC: "c",
    optionD: "d",
    correctAnswer: "a"
  },
  {
    title: "Question 2",
    optionA: "e",
    optionB: "f",
    optionC: "g",
    optionD: "h",
    correctAnswer: "e"
  }, {
    title: "Question 3",
    optionA: "i",
    optionB: "j",
    optionC: "k",
    optionD: "l",
    correctAnswer: "i"
  }, {
    title: "Question 4",
    optionA: "m",
    optionB: "n",
    optionC: "o",
    optionD: "p",
    correctAnswer: "m"
  }, {
    title: "Question 5",
    optionA: "a",
    optionB: "b",
    optionC: "c",
    optionD: "d",
    correctAnswer: "r"
  },
];

// Global variables for html elements
const currentQuestion = document.getElementById('current-question');
const answers = document.getElementById('answer-options');
const sumbitAnswer = document.getElementById('btn-confirm-choice');
const previousQuestion = document.getElementById('previous-queston');
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
/**
 * When the page first loads, this will populate the quiz area with question 1 and the relevant options
 */
function initiateQuiz() {
  let q = questions[runningQuestion];
  let a = document.getElementById('answer-options');

  currentQuestion.innerHTML = q.title;

  a.innerHTML = `
    <li>${q.optionA}</li>
    <li>${q.optionB}</li>
    <li>${q.optionC}</li>
    <li>${q.optionD}</li>
    `;
};

function nextQuestion() {

}


window.onload = () => {
  console.log("The window has loaded!");
  initiateQuiz();
};