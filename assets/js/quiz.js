const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
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
    correct_answer: "Final",
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
//due oggetti vuoti (array di oggetti) che serviranno per il local Storage
const correctObj = []; //domande e risposte giuste

const wrongObj = []; //domande e risposte sbagliate

const timerNumber = document.getElementById("counterTimer");
const circle = document.getElementById("circle");
const totalDashOffset = 314; //variabile contenente i pixel totali del cerchio

let countdown;
function Timer(questionType) {
  circle.style.strokeDashoffset = 0;
  //  circle.style.transition = "none";
  //parte la funzione timer che prende come parametro il type della domanda (boolean o multiple)
  let timer = questionType === "boolean" ? 30 : 45; //se il type della domanda è boolean parte da 30, altrimenti 45. operatore ternario
  const initialTime = timer;
  timerNumber.textContent = `${timer}`; //cambio il "testo" del timer recuperando il valore dalla variabile precedentemente definita
  countdown = setInterval(() => {
    //    circle.style.transition = "";
    //parte il timer. setInterval prende due parametri; il primo è una funzione freccia, il secondo è 1000
    timer--; //1000 indica che la funzione freccia deve essere ripetuta ogni 1000ms quindi 1 secondo. timer-- decrementa i secondi
    timerNumber.textContent = `${timer}`; //aggiorna il testo ogni secondo
    circle.style.strokeDashoffset = totalDashOffset * (1 - timer / initialTime); //gestisce l'animazione del cerchio. richiamando la classe css, facciamo un calcolo che calcola i pixel da rimuovere dal cerchio ad ogni secondo che passa
    if (timer <= -1) {
      //quando il timer arriva a 0, resetta l'intervallo e procede alla domanda successiva
      timerNumber.textContent = "0";
      clearInterval(countdown);
      proceedToNextQuestion(); //funzione importante per gestire le domande successive
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
const questionNumbers = document.getElementById("questionNumbers");

btnNextQuestion.addEventListener(
  "mouseover",
  () => (btnNextQuestion.style.boxShadow = "0px 0px 26px 6px #00ffff")
);

btnNextQuestion.addEventListener(
  "mouseleave",
  () => (btnNextQuestion.style.boxShadow = "0px 0px 18px 6px #00ffff")
);

let verifiedAnswers = 0;
let questionIndex = 0;

window.addEventListener("load", init);

function init() {
  //al caricamento della pagina stampa le domande (una alla volta)
  printQuestionAndAnswers();
}

function correctClicked() {
  btnNextQuestion.disabled = false; //riaabilito il pulsante procedi appena clicco una risposta (in questo caso è quella giusta)
  varCorrClicked = true; //imposta la variabile a true se clicco pulsante giusto
  varWrongClicked = false;
  btnArr[highlightCorrectIndex].classList.add("btnGroupAnswersJS"); //assegna la classe del gradiente al pulsante selezionato
}

function wrongClicked() {
  btnNextQuestion.disabled = false; //abilita il pulsante procedi
  varCorrClicked = false; //aggiorna il pulsante a false
  varWrongClicked = true;
  return true;
}

let indexWrongOrNotClicked;
btnAnswer1.addEventListener("click", function () {
  if (wrongClicked()) {
    //se wrongClicked ritorna true, vuol dire che ho cliccato il pulsante sbagliato
    btnAnswer1.classList.add("btnGroupAnswersJS"); //assegna il gradiente al pulsante selezionato e lo toglie agli altri
    btnAnswer2.classList.remove("btnGroupAnswersJS");
    btnAnswer3.classList.remove("btnGroupAnswersJS");
    btnAnswer4.classList.remove("btnGroupAnswersJS");
    indexWrongOrNotClicked = 0;
  }
});
btnAnswer2.addEventListener("click", function () {
  if (wrongClicked()) {
    btnAnswer2.classList.add("btnGroupAnswersJS");
    btnAnswer1.classList.remove("btnGroupAnswersJS");
    btnAnswer3.classList.remove("btnGroupAnswersJS");
    btnAnswer4.classList.remove("btnGroupAnswersJS");
    indexWrongOrNotClicked = 1;
  }
});
btnAnswer3.addEventListener("click", function () {
  if (wrongClicked()) {
    btnAnswer3.classList.add("btnGroupAnswersJS");
    btnAnswer2.classList.remove("btnGroupAnswersJS");
    btnAnswer1.classList.remove("btnGroupAnswersJS");
    btnAnswer4.classList.remove("btnGroupAnswersJS");
    indexWrongOrNotClicked = 2;
  }
});
btnAnswer4.addEventListener("click", function () {
  if (wrongClicked()) {
    btnAnswer4.classList.add("btnGroupAnswersJS");
    btnAnswer2.classList.remove("btnGroupAnswersJS");
    btnAnswer1.classList.remove("btnGroupAnswersJS");
    btnAnswer3.classList.remove("btnGroupAnswersJS");
    indexWrongOrNotClicked = 3;
  }
});

btnNextQuestion.addEventListener("click", proceedToNextQuestion); //listener click al bottone procedi
function proceedToNextQuestion() {
  //scala da domanda a domanda
  if (questionIndex === 9) {
    //prende l'indice delle domande dall'array, se arriva a 9 l'utente ha terminato
    //verifica se l'utente ha selezionato la risposta giusta. qui arriviamo all'ultima
    if (verifyAnswer()) {
      const newObj = {};
      let questionTitleVar = questions[questionIndex].question;
      let answerTextVar = questions[questionIndex].correct_answer;
      newObj.questionTitle = questionTitleVar;
      newObj.answerText = answerTextVar;
      correctObj.push(newObj);
    } else if (varWrongClicked) {
      const newObj = {};
      let questionTitleVar = questions[questionIndex].question;
      let answerTextVar = btnArr[indexWrongOrNotClicked].innerText;
      let correctAnswerVar = questions[questionIndex].correct_answer;
      newObj.questionTitle = questionTitleVar;
      newObj.answerText = answerTextVar;
      newObj.correctAnswer = correctAnswerVar;
      wrongObj.push(newObj);
    } else if (varCorrClicked === false && varWrongClicked === false) {
      const newObj = {};
      let questionTitleVar = questions[questionIndex].question;
      let answerTextVar = "❌";
      let correctAnswerVar = questions[questionIndex].correct_answer;
      newObj.questionTitle = questionTitleVar;
      newObj.answerText = answerTextVar;
      newObj.correctAnswer = correctAnswerVar;
      wrongObj.push(newObj);
    }
    let storeVerifiedAnswers = verifiedAnswers;
    localStorage.setItem("correctAnswers", storeVerifiedAnswers); //con localStorage salvo il numero delle domande corrette
    let storeCorrectArr = JSON.stringify(correctObj);
    let storeWrongArr = JSON.stringify(wrongObj);
    localStorage.setItem("correctArr", storeCorrectArr);
    localStorage.setItem("wrongArr", storeWrongArr);
    window.location.replace("results.html"); //rimando l'utende alla terza pagina results e faccio in modo con replace che non possa tornare alla pagina dei quiz, ma alla home
  } else {
    //in tutti i casi che non siano il 9 aggiorno l'index
    //verifica che la risposta cliccata sia la giusta
    if (verifyAnswer()) {
      //se verifyAnswer ritorna true, inizializza un nuovo oggetto che contiene domande e risposte giuste
      const newObj = {}; //se in console non stampa nulla, la risposta è sbagliata
      let questionTitleVar = questions[questionIndex].question;
      let answerTextVar = questions[questionIndex].correct_answer;
      newObj.questionTitle = questionTitleVar;
      newObj.answerText = answerTextVar;
      correctObj.push(newObj);
    } else if (varWrongClicked) {
      const newObj = {};
      let questionTitleVar = questions[questionIndex].question;
      let answerTextVar = btnArr[indexWrongOrNotClicked].innerText;
      let correctAnswerVar = questions[questionIndex].correct_answer;
      newObj.questionTitle = questionTitleVar;
      newObj.answerText = answerTextVar;
      newObj.correctAnswer = correctAnswerVar;
      wrongObj.push(newObj);
    } else if (varCorrClicked === false && varWrongClicked === false) {
      const newObj = {};
      let questionTitleVar = questions[questionIndex].question;
      let answerTextVar = "❌";
      let correctAnswerVar = questions[questionIndex].correct_answer;
      newObj.questionTitle = questionTitleVar;
      newObj.answerText = answerTextVar;
      newObj.correctAnswer = correctAnswerVar;
      wrongObj.push(newObj);
    }
    questionIndex++;
    printQuestionAndAnswers(); //ristampa la domanda ripartendo dai case aggiornati perche con ++ ho aggiornato l'index
  }
}

function verifyAnswer() {
  if (varCorrClicked) {
    //funzione che tiene il conto delle domande corrette. a ogni risposta cliccata incrementa di uno, solo se la risposta è corretta ovviamente
    verifiedAnswers++;
    return true;
  } else {
    return false;
  }
}

let varCorrClicked = false;
let varWrongClicked = false;

let incorrectIndex = 0;
let ranNum = 0;

let highlightCorrectIndex = 0;
let highlightWrongIndex = 0;

function printQuestionAndAnswers() {
  varCorrClicked = false;
  varWrongClicked = false;
  //funzione che stampa il testo della domanda
  questionNumbers.innerHTML = `Question ${
    //aggiorna il numero question x/10.
    questionIndex + 1 //inseriamo innerHTML per gestire il tag html span
  }<span class="numeretto"> / 10</span>`;
  btnAnswer1.removeEventListener("click", correctClicked); //rimuovo i listener inseriti nello switch all'inizializzazione della pagina
  btnAnswer2.removeEventListener("click", correctClicked); //perchè non conosco la posizione della domanda corretta (che è randomizzata)
  btnAnswer3.removeEventListener("click", correctClicked);
  btnAnswer4.removeEventListener("click", correctClicked);
  btnAnswer1.removeEventListener("click", wrongClicked);
  btnAnswer2.removeEventListener("click", wrongClicked);
  btnAnswer3.removeEventListener("click", wrongClicked);
  btnAnswer4.removeEventListener("click", wrongClicked);
  btnAnswer1.classList.remove("btnGroupAnswersJS"); //questi 4 reset rimuovono la classe css che assegna il gradiente al botton quando seleziono la risposta
  btnAnswer2.classList.remove("btnGroupAnswersJS");
  btnAnswer3.classList.remove("btnGroupAnswersJS");
  btnAnswer4.classList.remove("btnGroupAnswersJS");
  btnNextQuestion.disabled = true; //disabilita il bottone per procedere alla domanda successiva. non posso procedere se non seleziono una risposta
  clearInterval(countdown); //gestione timer. clearInterval resetta il countdown e lo fa andare a zero
  Timer(questions[questionIndex].type); //il timer riparte, legge il tipo della domanda dall'array; se multiple conterà 45secondi, se boolean ne conta 30
  switch (
    questionIndex //questo switch contiene gli altri switch al suo interno
  ) {
    case 0:
      questionHead.innerText = questions[questionIndex].question; //prendo il testo della domanda
      ranNum = Math.floor(Math.random() * 4); //genero il numero casuale della posizione del bottone della risposta corretta

      switch (
        ranNum // questo switch gestisce la posizione della risposta corretta
      ) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer; //gestione della risposta corretta
          btnAnswer1.addEventListener("click", correctClicked); //case 0= la risposta corretta appare al primo bottone e così via
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
        case 2:
          btnAnswer3.innerText = questions[questionIndex].correct_answer;
          btnAnswer3.addEventListener("click", correctClicked);
          highlightCorrectIndex = 2;
          break;
        case 3:
          btnAnswer4.innerText = questions[questionIndex].correct_answer;
          btnAnswer4.addEventListener("click", correctClicked);
          highlightCorrectIndex = 3;
          break;
      }
      //riprendo la gestione della domanda.
      incorrectIndex = 0; //variabile che mi permette di gestire l'indice delle risposte sbagliate. parte da 0 e da qui "parte" il for che fa 4 iterazioni ma "salta" la risposta corretta tramite l'if (3 iterazioni nella pratica)
      for (let i = 0; i < 4; i++) {
        //con il ciclo for prendo il numero dei bottoni (4) e gestisco le risposte sbagliate
        if (i !== ranNum) {
          //se l'i è diversa dal numero casuale della risposta corretta, salto l'iterazione
          btnArr[i].innerText = //ho un array che contiene tutti e 4 i bottoni. if mi permette di non "pescare" con il for il bottone in cui è posizionata la risposta corretta
            questions[questionIndex].incorrect_answers[incorrectIndex]; //pesco l'indice della risposta sbagliata e la sua stringa, con innerText inserisco nel bottone la risposta sbagliata
          btnArr[i].addEventListener("click", wrongClicked); //preso il bottone della risposta sbagliata, assegno un event click diverso da correctClicked(che è una funzione)
          incorrectIndex++; //con ++ incremento l'indice della risposta sbagliata. incorrect_answers, che contiene le risposte sbagliate nell'array, è un array a sua volta quindi qui seleziono il suo indice.
        } //incorrectIndex può arrivare a selezionare massimo 3 elementi, che è il massimo degli elementi all'interno dell'array incorrect_answers
      }
      break; //fine gestione della prima domanda, incluso lo switch interno per la risposta corretta
    case 1:
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 4);

      switch (ranNum) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer;
          btnAnswer1.addEventListener("click", correctClicked);
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
        case 2:
          btnAnswer3.innerText = questions[questionIndex].correct_answer;
          btnAnswer3.addEventListener("click", correctClicked);
          highlightCorrectIndex = 2;
          break;
        case 3:
          btnAnswer4.innerText = questions[questionIndex].correct_answer;
          btnAnswer4.addEventListener("click", correctClicked);
          highlightCorrectIndex = 3;
          break;
      }
      incorrectIndex = 0;
      for (let i = 0; i < 4; i++) {
        if (i !== ranNum) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }
      break; //troviamo il primo caso boolean
    case 2:
      btnAnswer3.style.visibility = "hidden"; //per prima cosa, nasconde gli ultimi due bottoni (me ne servono solo 2)
      btnAnswer4.style.visibility = "hidden";
      questionHead.innerText = questions[questionIndex].question; //prendo il titolo della domanda con questionIndex
      ranNum = Math.floor(Math.random() * 2); //genero nuovamente il numero casuale che viene moltiplicato per 2 invece che per 4 (mi servono solo gli indici 0 e 1 quindi due valori)

      switch (
        ranNum //gestisce la risposta corretta
      ) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer;
          btnAnswer1.addEventListener("click", correctClicked);
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
      }
      incorrectIndex = 0;
      for (let i = 0; i < 2; i++) {
        //stessa logica del for precedente ma che arriva fino a massimo 2 iterazioni (0 e 1)
        if (i !== ranNum) {
          //if esclude la risposta corretta e inserisce quella sbagliata nell'altro bottone
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++; //l'indice qua si incrementa fino a 1 (0 e 1)
        }
      }
      break; //esce dalla funzione
    case 3:
      btnAnswer3.style.visibility = "hidden";
      btnAnswer4.style.visibility = "hidden";
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 2);

      switch (ranNum) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer;
          btnAnswer1.addEventListener("click", correctClicked);
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
      }

      incorrectIndex = 0;
      for (let i = 0; i < 2; i++) {
        if (i !== ranNum) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }
      break;
    case 4:
      btnAnswer3.style.visibility = "visible";
      btnAnswer4.style.visibility = "visible";
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 4);

      switch (ranNum) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer;
          btnAnswer1.addEventListener("click", correctClicked);
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
        case 2:
          btnAnswer3.innerText = questions[questionIndex].correct_answer;
          btnAnswer3.addEventListener("click", correctClicked);
          highlightCorrectIndex = 2;
          break;
        case 3:
          btnAnswer4.innerText = questions[questionIndex].correct_answer;
          btnAnswer4.addEventListener("click", correctClicked);
          highlightCorrectIndex = 3;
          break;
      }
      incorrectIndex = 0;
      for (let i = 0; i < 4; i++) {
        if (i !== ranNum) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }
      break;
    case 5:
      btnAnswer3.style.visibility = "visible";
      btnAnswer4.style.visibility = "visible";
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 4);

      switch (ranNum) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer;
          btnAnswer1.addEventListener("click", correctClicked);
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
        case 2:
          btnAnswer3.innerText = questions[questionIndex].correct_answer;
          btnAnswer3.addEventListener("click", correctClicked);
          highlightCorrectIndex = 2;
          break;
        case 3:
          btnAnswer4.innerText = questions[questionIndex].correct_answer;
          btnAnswer4.addEventListener("click", correctClicked);
          highlightCorrectIndex = 3;
          break;
      }
      incorrectIndex = 0;
      for (let i = 0; i < 4; i++) {
        if (i !== ranNum) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }
      break;
    case 6:
      btnAnswer3.style.visibility = "visible";
      btnAnswer4.style.visibility = "visible";
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 4);

      switch (ranNum) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer;
          btnAnswer1.addEventListener("click", correctClicked);
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
        case 2:
          btnAnswer3.innerText = questions[questionIndex].correct_answer;
          btnAnswer3.addEventListener("click", correctClicked);
          highlightCorrectIndex = 2;
          break;
        case 3:
          btnAnswer4.innerText = questions[questionIndex].correct_answer;
          btnAnswer4.addEventListener("click", correctClicked);
          highlightCorrectIndex = 3;
          break;
      }
      incorrectIndex = 0;
      for (let i = 0; i < 4; i++) {
        if (i !== ranNum) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }
      break;
    case 7:
      btnAnswer3.style.visibility = "visible";
      btnAnswer4.style.visibility = "visible";
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 4);

      switch (ranNum) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer;
          btnAnswer1.addEventListener("click", correctClicked);
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
        case 2:
          btnAnswer3.innerText = questions[questionIndex].correct_answer;
          btnAnswer3.addEventListener("click", correctClicked);
          highlightCorrectIndex = 2;
          break;
        case 3:
          btnAnswer4.innerText = questions[questionIndex].correct_answer;
          btnAnswer4.addEventListener("click", correctClicked);
          highlightCorrectIndex = 3;
          break;
      }
      incorrectIndex = 0;
      for (let i = 0; i < 4; i++) {
        if (i !== ranNum) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }

      break;
    case 8:
      btnAnswer3.style.visibility = "hidden";
      btnAnswer4.style.visibility = "hidden";
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 2);

      switch (ranNum) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer;
          btnAnswer1.addEventListener("click", correctClicked);
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
      }

      incorrectIndex = 0;
      for (let i = 0; i < 2; i++) {
        if (i !== ranNum) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }

      break;
    case 9:
      btnAnswer3.style.visibility = "visible";
      btnAnswer4.style.visibility = "visible";
      questionHead.innerText = questions[questionIndex].question;
      ranNum = Math.floor(Math.random() * 4);

      switch (ranNum) {
        case 0:
          btnAnswer1.innerText = questions[questionIndex].correct_answer;
          btnAnswer1.addEventListener("click", correctClicked);
          highlightCorrectIndex = 0;
          break;
        case 1:
          btnAnswer2.innerText = questions[questionIndex].correct_answer;
          btnAnswer2.addEventListener("click", correctClicked);
          highlightCorrectIndex = 1;
          break;
        case 2:
          btnAnswer3.innerText = questions[questionIndex].correct_answer;
          btnAnswer3.addEventListener("click", correctClicked);
          highlightCorrectIndex = 2;
          break;
        case 3:
          btnAnswer4.innerText = questions[questionIndex].correct_answer;
          btnAnswer4.addEventListener("click", correctClicked);
          highlightCorrectIndex = 3;
          break;
      }
      incorrectIndex = 0;
      for (let i = 0; i < 4; i++) {
        if (i !== ranNum) {
          btnArr[i].innerText =
            questions[questionIndex].incorrect_answers[incorrectIndex];
          btnArr[i].addEventListener("click", wrongClicked);
          incorrectIndex++;
        }
      }

      break;
  }
}
