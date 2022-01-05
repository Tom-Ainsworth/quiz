// Array of quiz questions
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

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
function initiateQuiz() {
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
    <button onclick='checkAnswer()' id="btn-submit" class="quiz-btn">Submit</button>
    `;
  console.log("Gryffindor Score: " + gryffindorScore);
  console.log("Hufflepuff Score: " + hufflepuffScore);
  console.log("Ravenclaw Score " + ravenclawScore);
  console.log("Slytherin Score " + slytherinScore);
};

/**
 * On clicking the submit button, this will check which answer was entered, and load the next question
 */
function nextQuestion() {
  if (runningQuestion = questions.length) {
    showResults();
  } else if (runningQuestion < questions.length) {
    runningQuestion++
    initiateQuiz();
  }
}

function checkAnswer() {
  document.getElementById("btn-submit").addEventListener("click", function (event) {
    event.preventDefault()
  });
  document.getElementById("option-1").addEventListener("click", function (event) {
    event.preventDefault()
  });
  document.getElementById("option-2").addEventListener("click", function (event) {
    event.preventDefault()
  });
  document.getElementById("option-3").addEventListener("click", function (event) {
    event.preventDefault()
  });
  document.getElementById("option-4").addEventListener("click", function (event) {
    event.preventDefault()
  });

  runningQuestion++
  
  if (document.getElementById('option-1').checked) {
    gryffindorScore++;
    console.log('Gryffindor Score: ' + gryffindorScore);
    initiateQuiz();
  } else if (document.getElementById('option-2').checked) {
    hufflepuffScore++;
    console.log('Hufflepuff Score: ' + hufflepuffScore);
    initiateQuiz();
  } else if (document.getElementById('option-3').checked) {
    ravenclawScore++;
    console.log('Ravenclaw Score: ' + ravenclawScore);
    initiateQuiz();
  } else if (document.getElementById('option-4').checked) {
    slytherinScore++;
    console.log('Slytherin Score: ' + slytherinScore);
    initiateQuiz();
  }
  
  console.log('Running Question is: ' + runningQuestion);
}

function showResults() {

}

function startAgain() {
  gryffindorScore = 0;
  hufflepuffScore = 0;
  ravenclawScore = 0;
  slytherinScore = 0;
  runningQuestion = 0

  document.getElementById('quiz-page').classList.add('hidden');
  document.getElementById('home-page').classList.remove('hidden');
}