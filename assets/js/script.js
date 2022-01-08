window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
document.getElementById('start-quiz-btn').addEventListener('click', showNextQuestion);

// Array of quiz questions
const questions = [{
    title: "What’s your favourite game?",
    optionA: "Wizard chess",
    optionB: "Scrabble",
    optionC: "Twister",
    optionD: "Monopoly",
  },
  {
    title: "When do you hand your homework in?",
    optionA: "Late",
    optionB: "Early",
    optionC: "On time ",
    optionD: "I make someone else to do it ",
  },
  {
    title: "What’s your favourite shop in Diagon Alley?",
    optionA: "Weasleys’ Wizard Wheezes",
    optionB: "Flourish and Blotts",
    optionC: "Magical Menagerie",
    optionD: "I prefer Knockturn Alley",
  },
];

// Global variables for html elements
const currentQuestion = document.getElementById('current-question');
const answers = document.getElementById('answer-options');
let submitBtn = document.getElementById('btn-submit');
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  submitAnswer();
});

// Question & Score counters
let runningQuestion = 0;
const answerOptions = document.getElementById('answer-options');
const submit = document.getElementById('btn-submit');
const lastQuestion = questions.length;
let gryffindorScore = 0;
let ravenclawScore = 0;
let hufflepuffScore = 0;
let slytherinScore = 0;

function showNextQuestion() {
  if (runningQuestion < lastQuestion) {
    const questionArray = questions[runningQuestion];
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');
    document.getElementById('start-again-btn-div').classList.remove('hidden');
    document.getElementById('btn-submit').classList.remove('hidden');

    // Inject template HTML into the DOM
    currentQuestion.innerHTML = questionArray.title;
    answerOptions.innerHTML = `  
      <input class="answer-option" type="radio" name="answers" id="option-1" required>
      <label class="answer-option" for="option-1">
        <span data-hover="${questionArray.optionA}">${questionArray.optionA}</span>
      </label>

      <input class="answer-option" type="radio" name="answers" id="option-2">
      <label class="answer-option" for="option-2">							
        <span data-hover="${questionArray.optionB}">${questionArray.optionB}</span>
      </label>

      <input class="answer-option" type="radio" name="answers" id="option-3">
      <label class="answer-option" for="option-3">
        <span data-hover="${questionArray.optionC}">${questionArray.optionC}</span>
      </label>

      <input class="answer-option" type="radio" name="answers" id="option-4">
      <label class="answer-option" for="option-4">
        <span data-hover="${questionArray.optionD}">${questionArray.optionD}</span>
      </label>
      `;
  } else {
    collectResultsAndDisplayHouse();
  }
  console.log(gryffindorScore, ravenclawScore, hufflepuffScore, slytherinScore);
}

function submitAnswer() {
  checkAnswerResult();
  showNextQuestion();
}

function checkAnswerResult() {
  if (document.getElementById('option-1').checked) {
    gryffindorScore++;
    runningQuestion++;
  } else if (document.getElementById('option-2').checked) {
    ravenclawScore++;
    runningQuestion++;
  } else if (document.getElementById('option-3').checked) {
    hufflepuffScore++;
    runningQuestion++;
  } else if (document.getElementById('option-4').checked) {
    slytherinScore++;
    runningQuestion++;
  } else {
    alert('Oops! The Sorting Hat needs an answer to decide your fate! Please try again');
  }
}

/**
 * Collects the scores from all 4 houses, sorts them from highest to lowest point score, then displays the house result to the user
 */
function collectResultsAndDisplayHouse() {
  let finalScores = [{
    house: "Gryffindor",
    points: gryffindorScore
  }, {
    house: "Ravenclaw",
    points: ravenclawScore
  }, {
    house: "Hufflepuff",
    points: hufflepuffScore
  }, {
    house: "Slytherin",
    points: slytherinScore
  }];

  const gryffindor = finalScores[0];
  const ravenclaw = finalScores[1];
  const hufflepuff = finalScores[2];
  const slytherin = finalScores[3];

  finalScores.sort((a, b) => (b.points - a.points));

  let topScore = finalScores[0];
  document.getElementById('btn-submit').classList.add('hidden');
  document.getElementById('quiz-page').classList.add('hidden');
  document.getElementById('results-page').classList.remove('hidden');

  if (topScore[0].house === "Gryffindor") {
    document.getElementById('gryffindor-result').classList.remove('hidden');
  } else if (topScore[0].house === "Ravenclaw") {
    document.getElementById('ravenclaw-result').classList.remove('hidden');
  } else if (topScore[0].house === "Hufflepuff") {
    document.getElementById('hufflepuff-result').classList.remove('hidden');
  } else if (topScore[0].house === "Slytherin") {
    document.getElementById('slytherin-result').classList.remove('hidden');
  }
}
/**
 * Resets all scores and returns to the main screen
 */
function startAgainFromMenu() {
  gryffindorScore = 0;
  ravenclawScore = 0;
  hufflepuffScore = 0;
  slytherinScore = 0;
  runningQuestion = 0;

  document.getElementById('quiz-page').classList.add('hidden');
  document.getElementById('home-page').classList.remove('hidden');
}

document.getElementById('start-again-btn').addEventListener('click', startAgainFromMenu);