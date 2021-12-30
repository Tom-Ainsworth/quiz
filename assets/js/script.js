const questions = [{
    title: "?",
    option: [
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: "a"
  },
  {
    title: "?",
    option: [
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: "a"
  }, {
    title: "?",
    option: [
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: "a"
  }, {
    title: "?",
    option: [
      "a",
      "b",
      "c",
      "d"
    ],
    correctAnswer: "a"
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
  let questionTitle = questions.title;
  let answers = questions.option;
  let correct = questions.correctAnswer;

  let title = document.getElementById('question');
  title.textContent = `"The question is ${questionTitle}`;
}

console.log(showQuestion());