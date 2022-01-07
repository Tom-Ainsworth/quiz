// Array of quiz questions
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
document.getElementById('btn-start-quiz').addEventListener('click', showNextQuestion);

const questions = [{
    title: "Question 1",
    optionA: "a",
    optionB: "b",
    optionC: "c",
    optionD: "d",
  },
  {
    title: "Question 2",
    optionA: "e",
    optionB: "f",
    optionC: "g",
    optionD: "h",
  }, {
    title: "Question 3",
    optionA: "i",
    optionB: "j",
    optionC: "k",
    optionD: "l",
  }, {
    title: "Question 4",
    optionA: "m",
    optionB: "n",
    optionC: "o",
    optionD: "p",
  }, {
    title: "Question 5",
    optionA: "q",
    optionB: "r",
    optionC: "s",
    optionD: "t",
  },
];

// Global variables for html elements
const currentQuestion = document.getElementById('current-question');
const answers = document.getElementById('answer-options');
const lastQuestion = questions.length - 1;

// Question & Score counters
let runningQuestion = 0;
const a = document.getElementById('answer-options');
const submit = document.getElementById('btn-submit');
let gryffindorScore = 0;
let hufflepuffScore = 0;
let ravenclawScore = 0;
let slytherinScore = 0;
let allScores = `${gryffindorScore}, ${hufflepuffScore}, ${ravenclawScore}, ${slytherinScore}`;

/**
 * When the page first loads, this will populate the quiz area with question 1 and the relevant options
 */
function showNextQuestion() {
  const q = questions[runningQuestion];
  document.getElementById('home-page').classList.add('hidden');
  document.getElementById('quiz-page').classList.remove('hidden');
  currentQuestion.innerHTML = q.title;

  // Inject template HTML into the DOM
  a.innerHTML = `  
    <input class="answer-option" type="radio" name="answers" id="option-1" required>
    <label class="answer-option" for="option-1">
      <span data-hover="${q.optionA}">${q.optionA}</span>
    </label>

    <input class="answer-option" type="radio" name="answers" id="option-2">
    <label class="answer-option" for="option-2">							
      <span data-hover="${q.optionB}">${q.optionB}</span>
    </label>

    <input class="answer-option" type="radio" name="answers" id="option-3">
    <label class="answer-option" for="option-3">
      <span data-hover="${q.optionC}">${q.optionC}</span>
    </label>

    <input class="answer-option" type="radio" name="answers" id="option-4">
    <label class="answer-option" for="option-4">
      <span data-hover="${q.optionD}">${q.optionD}</span>
    </label>
    <br>
    <button type="submit" id="btn-submit" class="quiz-btn">Submit</button>
    `;

  let submitBtn = document.getElementById('btn-submit');
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    submitAnswer();
  });
  console.log("Gryffindor Score: " + gryffindorScore);
  console.log("Hufflepuff Score: " + hufflepuffScore);
  console.log("Ravenclaw Score " + ravenclawScore);
  console.log("Slytherin Score " + slytherinScore);
};

function submitAnswer() {
  if (runningQuestion == lastQuestion) {
    collectResults();
  } else {
    checkAnswerResult();
    showNextQuestion();
  }
}

/**
 * On clicking the submit button, this will check which answer was entered, and load the next question
 */

// DELETE THIS BEFORE SUBMISSION
// function nextQuestion() { 
//   if (runningQuestion = questions.length) {
//     collectResults();
//   } else if (runningQuestion < questions.length) {
//     runningQuestion++
//     initiateQuiz();
//   }
// }

function checkAnswerResult() {
  if (document.getElementById('option-1').checked) {
    gryffindorScore++;
    runningQuestion++;
  } else if (document.getElementById('option-2').checked) {
    hufflepuffScore++;
    runningQuestion++;
    console.log('Hufflepuff Score: ' + hufflepuffScore);
  } else if (document.getElementById('option-3').checked) {
    ravenclawScore++;
    runningQuestion++;
    console.log('Ravenclaw Score: ' + ravenclawScore);
  } else if (document.getElementById('option-4').checked) {
    slytherinScore++;
    runningQuestion++;
    console.log('Slytherin Score: ' + slytherinScore);
  }
  console.log('Running Question is: ' + runningQuestion);
}

function collectResults() {
  let finalScores = [];
  finalScores.push(`${gryffindorScore}, ${hufflepuffScore}, ${ravenclawScore}, ${slytherinScore}`);
  console.log(allScores);
  alert("You've Won!");
}

/**
 * 
 */
function startAgainFromMenu() {
  gryffindorScore = 0;
  hufflepuffScore = 0;
  ravenclawScore = 0;
  slytherinScore = 0;
  runningQuestion = 0

  document.getElementById('quiz-page').classList.add('hidden');
  document.getElementById('home-page').classList.remove('hidden');
}

document.getElementById('menu-btn').addEventListener('click', startAgainFromMenu);