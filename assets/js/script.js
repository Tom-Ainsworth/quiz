// Array of quiz questions
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
document.getElementById('btn-start-quiz').addEventListener('click', showNextQuestion);

const questions = [{
    title: "Which colour is your favourite?",
    optionA: "Red",
    optionB: "Blue",
    optionC: "Yellow",
    optionD: "Green",
  },
  {
    title: "What pet would you take with you to Hogwarts?",
    optionA: "Dog",
    optionB: "Owl",
    optionC: "Hamster",
    optionD: "Lizard",
  }, {
    title: "Which personality trait do you most value?",
    optionA: "Courage",
    optionB: "Intelligence",
    optionC: "Kindness",
    optionD: "Ambition",
  }, {
    title: "If you’re running a race and your friend trips over, do you…",
    optionA: "Heroically sling them over your shoulder and run with them to the finish line",
    optionB: "Convince the race officials that the race is invalid on a technicality and must be re-run",
    optionC: "Sit with your friend and comfort them - the race isn’t important. ",
    optionD: "Keep running - you need to win this!",
  }, {
    title: "What sort of car would you drive?",
    optionA: "Range Rover",
    optionB: "Tesla",
    optionC: "VW campervan",
    optionD: "Lamborghini",
  },
  {
    title: "You accidentally break your mum’s vase do you…",
    optionA: "wn up to it and take the consequences",
    optionB: "Replace it with an identical vase",
    optionC: "Apologise to your mum by baking an apology cake",
    optionD: "Find someone else to blame",
  },
  {
    title: "If you have spare time do you prefer to…",
    optionA: "Do sport",
    optionB: "Read a book",
    optionC: "Bake",
    optionD: "Watch fail videos on YouTube",
  },
  {
    title: "What would your favourite subject at Hogwarts be?",
    optionA: "Quidditch",
    optionB: "Ancient Runes ",
    optionC: "Herbology",
    optionD: "Potions",
  },
  {
    title: "If you could apparate to any holiday which would it be?",
    optionA: "White water rafting in Colorado ",
    optionB: "Historical tour of Rome",
    optionC: "Otter sanctuary in Wales",
    optionD: "Yachting in the Carribean",
  },
  {
    title: "Which Spice Girl would you be?",
    optionA: "Sporty",
    optionB: "Posh",
    optionC: "Baby",
    optionD: "Scary",
  },
  {
    title: "What’s your favourite book genre?",
    optionA: "Adventure",
    optionB: "Science fiction",
    optionC: "Cookbooks",
    optionD: "Crime thrillers",
  },
  {
    title: "If you were a TV series which would you be?",
    optionA: "SAS Who Dares Wins",
    optionB: "QI",
    optionC: "Planet Earth",
    optionD: "You",
  },
  {
    title: "What breed of dog would you be?",
    optionA: "German Shepherd",
    optionB: "Border Collie",
    optionC: "Golden retriever",
    optionD: "Doberman",
  },
  {
    title: "What sort of gift is your favourite to receive?",
    optionA: "Sporting goods",
    optionB: "Books",
    optionC: "Something homemade",
    optionD: "Cash",
  },
  {
    title: "What’s your favourite genre of music?",
    optionA: "Pop-rock",
    optionB: "Jazz",
    optionC: "Folk",
    optionD: "Heavy metal",
  },
  {
    title: "What’s your favourite season?",
    optionA: "Summer",
    optionB: "Autumn",
    optionC: "Spring",
    optionD: "Winter",
  },
  {
    title: "What shape would a boggart take when you face it?",
    optionA: "A dementor",
    optionB: "A failed exam",
    optionC: "An office job",
    optionD: "An empty Gringott’s vault",
  },
  {
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


// Question & Score counters
let runningQuestion = 0;
const a = document.getElementById('answer-options');
const submit = document.getElementById('btn-submit');
const lastQuestion = questions.length - 1;
let gryffindorScore = 0;
let ravenclawScore = 0;
let hufflepuffScore = 0;
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
  console.log("Ravenclaw Score " + ravenclawScore);
  console.log("Hufflepuff Score: " + hufflepuffScore);
  console.log("Slytherin Score " + slytherinScore);
}

function submitAnswer() {
  checkAnswerResult();
  showNextQuestion();
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
    ravenclawScore++;
    runningQuestion++;
  } else if (document.getElementById('option-3').checked) {
    hufflepuffScore++;
    runningQuestion++;
  } else if (document.getElementById('option-4').checked) {
    slytherinScore++;
    runningQuestion++;
  }
  console.log('Running Question is: ' + runningQuestion);
  if (runningQuestion > lastQuestion) {
    collectResults();
  }
}

function collectResults() {
  let finalScores = [];
  finalScores.push(`${gryffindorScore}, ${ravenclawScore}, ${hufflepuffScore}, ${slytherinScore}`);
  console.log(finalScores);
  alert("You've Won!");
}

/**
 * Resets all scores and returns to the main screen
 */
function startAgainFromMenu() {
  gryffindorScore = 0;
  ravenclawScore = 0;
  hufflepuffScore = 0;
  slytherinScore = 0;
  runningQuestion = 0

  document.getElementById('quiz-page').classList.add('hidden');
  document.getElementById('home-page').classList.remove('hidden');
}

document.getElementById('menu-btn').addEventListener('click', startAgainFromMenu)