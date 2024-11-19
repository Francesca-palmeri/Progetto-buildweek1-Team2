const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "RISPOSTA CORRETTA: Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "RISPOSTA CORRETTA: Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const timerDiv = document.getElementById("counterTimer");

let countdown;
function Timer(questionType) {
  let timer = questionType === "boolean" ? 30 : 45;
  timerDiv.textContent = `${timer}`;
  countdown = setInterval(() => {
    timer--;
    timerDiv.textContent = `${timer}`;
    if (timer <= -1) {
      clearInterval(countdown);
      questionIndex++;
      printQuestionAndAnswers();
    }
  }, 1000);
}

const questionHead = document.getElementById("questionHeading");
const btnArr = [];
const btnAnswer1 = document.getElementById("btnAnswer1");
btnArr.push(btnAnswer1);
const btnAnswer2 = document.getElementById("btnAnswer2");
btnArr.push(btnAnswer2);
const btnAnswer3 = document.getElementById("btnAnswer3");
btnArr.push(btnAnswer3);
const btnAnswer4 = document.getElementById("btnAnswer4");
btnArr.push(btnAnswer4);
const btnNextQuestion = document.getElementById("btnNextQuestion");

let verifiedAnswers = 0;
let questionIndex = 0;

window.addEventListener("load", init);

function init() {
  printQuestionAndAnswers();
}

function correctClicked() {
  btnNextQuestion.disabled = false;
  varCorrClicked = true;
  varWrongClicked = false;
}

function wrongClicked() {
  btnNextQuestion.disabled = false;
  varCorrClicked = false;
  varWrongClicked = true;
}

btnNextQuestion.addEventListener("click", proceedToNextQuestion);
function proceedToNextQuestion() {
  questionIndex++;
  verifyAnswer();
  printQuestionAndAnswers();
}

function verifyAnswer() {
  if (varCorrClicked) {
    verifiedAnswers++;
    console.log(verifiedAnswers);
  }
}

let varCorrClicked = false;
let varWrongClicked = false;

let incorrectIndex = 0;
let ranNum = 0;
function printQuestionAndAnswers() {
  btnNextQuestion.disabled = true;
  clearInterval(countdown);
  Timer(questions[questionIndex].type);
  switch (questionIndex) {
    case 0:
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 4);

      for (let i = 0; i < 4; i++) {
        switch (ranNum) {
          case 0:
            btnAnswer1.innerText = questions[questionIndex].correct_answer;
            btnAnswer1.addEventListener("click", correctClicked);
            break;
          case 1:
            btnAnswer2.innerText = questions[questionIndex].correct_answer;
            btnAnswer2.addEventListener("click", correctClicked);
            break;
          case 2:
            btnAnswer3.innerText = questions[questionIndex].correct_answer;
            btnAnswer3.addEventListener("click", correctClicked);
            break;
          case 3:
            btnAnswer4.innerText = questions[questionIndex].correct_answer;
            btnAnswer4.addEventListener("click", correctClicked);
            break;
        }
      }
      incorrectIndex = 0;
      for (let i = 0; i < 4; i++) {
        if (btnArr[i].innerText !== questions[questionIndex].correct_answer) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }
      break;
    case 1:
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 4);

      for (let i = 0; i < 4; i++) {
        switch (ranNum) {
          case 0:
            btnAnswer1.innerText = questions[questionIndex].correct_answer;
            btnAnswer1.addEventListener("click", correctClicked);
            break;
          case 1:
            btnAnswer2.innerText = questions[questionIndex].correct_answer;
            btnAnswer2.addEventListener("click", correctClicked);
            break;
          case 2:
            btnAnswer3.innerText = questions[questionIndex].correct_answer;
            btnAnswer3.addEventListener("click", correctClicked);
            break;
          case 3:
            btnAnswer4.innerText = questions[questionIndex].correct_answer;
            btnAnswer4.addEventListener("click", correctClicked);
            break;
        }
      }
      incorrectIndex = 0;
      for (let i = 0; i < 4; i++) {
        if (btnArr[i].innerText !== questions[questionIndex].correct_answer) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }
      break;
    case 2:
      btnAnswer3.style.visibility = "hidden";
      btnAnswer4.style.visibility = "hidden";
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 2);

      for (let i = 0; i < 2; i++) {
        switch (ranNum) {
          case 0:
            btnAnswer1.innerText = questions[questionIndex].correct_answer;
            btnAnswer1.addEventListener("click", correctClicked);
            break;
          case 1:
            btnAnswer2.innerText = questions[questionIndex].correct_answer;
            btnAnswer2.addEventListener("click", correctClicked);
            break;
        }
      }
      incorrectIndex = 0;
      for (let i = 0; i < 2; i++) {
        if (btnArr[i].innerText !== questions[questionIndex].correct_answer) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }
      break;
    case 3:
      questionHead.innerText = questions[questionIndex].question;

      break;
    case 4:
      questionHead.innerText = questions[questionIndex].question;

      break;
    case 5:
      questionHead.innerText = questions[questionIndex].question;

      break;
    case 6:
      questionHead.innerText = questions[questionIndex].question;

      break;
    case 7:
      questionHead.innerText = questions[questionIndex].question;

      break;
    case 8:
      questionHead.innerText = questions[questionIndex].question;

      break;
    case 9:
      questionHead.innerText = questions[questionIndex].question;

      break;
    case 10:
      questionHead.innerText = questions[questionIndex].question;

      break;
  }
}
