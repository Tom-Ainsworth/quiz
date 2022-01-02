// Array of quiz questions
const questions = [{
    title: "Question 1",
    option: [
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: "a"
  },
  {
    title: "Question 2",
    option: [
      "e",
      "f",
      "g",
      "h"
    ],
    correctAnswer: "e"
  }, {
    title: "Question 3",
    option: [
      "i",
      "j",
      "k",
      "l"
    ],
    correctAnswer: "i"
  }, {
    title: "Question 4",
    option: [
      "m",
      "n",
      "o",
      "p"
    ],
    correctAnswer: "m"
  }, {
    title: "Question 5",
    option: [
      "q",
      "r",
      "s",
      "t"
    ],
    correctAnswer: "r"
  },
];

/**
 * When the page first loads, this will populate the quiz area with question 1 and the relevant options
 */
function initiateQuiz() {
  let questionTitle = questions[0].title;
  let questionOptions = questions[0].option;
  let currentQuestion = document.getElementById('current-question');
  document.getElementById
  let answers = document.getElementById('answer-options');

  currentQuestion.innerHTML = `${questionTitle}`;
  answers.innerHTML = `<li>${questionOptions[0]}</li> <li>${questionOptions[1]}</li> <li>${questionOptions[2]}</li> <li>${questionOptions[3]}</li>`;
};


window.onload = () => {
  console.log("The window has loaded!");
  initiateQuiz();
};