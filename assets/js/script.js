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

// Question & Score counters
let runningQuestion = 0;

let gryffindorScore = 0;
let hufflepuffScore = 0;
let ravenclawScore = 0;
let slytherinScore = 0;
/**
 * When the page first loads, this will populate the quiz area with question 1 and the relevant options
 */
function showQuestion() {
  let q = questions[runningQuestion];
  let a = document.getElementById('answer-options');

  currentQuestion.innerHTML = q.title;

  // Inject template HTML into the DOM
  a.innerHTML = `  
    <input class="answer-option" type="radio" name="answers" id="option-1" checked>
    <label class="answer-option" for="option-1">
      <span data-hover="Answer 1">Answer 1</span>
    </label><!-- -->
    <input class="answer-option" type="radio" name="answers" id="option-2">
    <label class="answer-option" for="option-2">							
      <span data-hover="Answer 2">Answer 2</span>
    </label><!--
                -->
    <input class="answer-option" type="radio" name="answers" id="option-3" checked>
    <label class="answer-option" for="option-3">
      <span data-hover="Answer 3">Answer 3</span>
    </label>
    <input class="answer-option" type="radio" name="answers" id="option-4" checked>
    <label class="answer-option" for="option-4">
      <span data-hover="Answer 4">Answer 4</span>
    </label>
    `;

  runningQuestion++;
};

/**
 * On clicking the submit button, this will check which answer was entered, and load the next question
 */
function nextQuestion() {
  checkAnswer();

  if (runningQuestion = questions.length) {
    showResults();
  } else if (runningQuestion < questions.length) {
    showQuestion()
  }
}

function checkAnswer() {

}

function showResults() {

}

window.onload = () => {
  console.log("The window has loaded!");
  showQuestion();
};