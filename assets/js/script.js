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
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: "Question"
  }, {
    title: "?",
    option: [
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: "Question"
  }, {
    title: "?",
    option: [
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: "Question"
  }, {
    title: "?",
    option: [
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: "a"
  },
];

function showQuestion() {
  let questionTitle = questions[0].title;
  let questionOptions = questions[0].option;
  let answers = document.getElementsByClassName('options');

  // add question title to html div
  let title = document.getElementById('question');
  title.textContent = questionTitle;

  // NEEDS FIXING Iterate through options to give li elements the options
  for (let i = 0; i < questionOptions.Length; i++) {
    answers.textContent = questionOptions;
}
}

showQuestion();