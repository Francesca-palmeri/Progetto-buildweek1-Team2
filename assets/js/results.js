let correctAnswers = localStorage.getItem("correctAnswers");
let correctArrStr = localStorage.getItem("correctArr");
let wrongArrStr = localStorage.getItem("wrongArr");
let correctArrObj = JSON.parse(correctArrStr);
let wrongArrObj = JSON.parse(wrongArrStr);

window.addEventListener("load", function () {
  console.log(correctArrObj);
  console.log(wrongArrObj);
  printBothList();
});

const percentRight = document.getElementById("percentRight");
const percentWrong = document.getElementById("percentWrong");
const numbersCorrect = document.getElementById("numbersCorrect");
const numbersWrong = document.getElementById("numbersWrong");
const mex = document.getElementById("mex");
const mailSend = document.getElementById("mailSend");
percentRight.innerHTML = `<span id="percentRight">${
  (correctAnswers / 10) * 100
}%</span>`;
percentWrong.innerHTML = `<span id="percentWrong">${
  100 - (correctAnswers / 10) * 100
}%</span>`;
numbersCorrect.innerText = `${correctAnswers}/10`;
numbersWrong.innerText = `${10 - correctAnswers}/10`;

if (correctAnswers >= 6) {
  mex.innerHTML = `<span style="color: #00FFFF">Congratulations!<br/>You passed the exam.</span>`;
} else {
  mex.innerHTML = `<span style="font-size: 30px">Sorry!</span><br/><br/><span style="font-weight: normal">You didn't pass the exam.</span>`;
  mailSend.style.display = "none";
}

const myChartsCanvas = document.getElementById("myCharts");
const donutChart = new Chart(myChartsCanvas, {
  type: "doughnut",
  data: {
    labels: ["Wrong", "Correct"],
    datasets: [
      {
        label: "Answers",
        data: [10 - correctAnswers, correctAnswers],
        backgroundColor: ["#C2128D", "#00FFFF"],
        borderWidth: "",
        hoverOffset: 1,
      },
    ],
  },
  options: {
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

let btnRateUs = document.getElementById("btnRateUs");
btnRateUs.addEventListener("click", function () {
  window.location.href = "review.html";
});

let btnShowAnswers = document.getElementById("btnShowAnswers");
let answersUl = document.getElementById("answersUl");
let wrongUl = document.getElementById("wrongUl");
let correctHead = document.getElementById("correctHead");
let wrongHead = document.getElementById("wrongHead");
let ulCorrectDiv = document.getElementById("ulCorrectDiv");
let ulWrongDiv = document.getElementById("ulWrongDiv");
btnShowAnswers.addEventListener("click", function () {
  if (
    ulCorrectDiv.style.visibility === "hidden" &&
    ulWrongDiv.style.visibility === "hidden"
  ) {
    ulCorrectDiv.style.visibility = "visible";
    ulWrongDiv.style.visibility = "visible";
  } else {
    ulCorrectDiv.style.visibility = "hidden";
    ulWrongDiv.style.visibility = "hidden";
  }
});

btnShowAnswers.addEventListener("mouseover", () => {
  btnShowAnswers.classList.toggle("btnGroupAnswersJS");
});

btnShowAnswers.addEventListener("mouseleave", () => {
  btnShowAnswers.classList.toggle("btnGroupAnswersJS");
});

btnRateUs.addEventListener("mouseover", () => {
  btnRateUs.classList.toggle("btnGroupAnswersJS");
});
btnRateUs.addEventListener("mouseleave", () => {
  btnRateUs.classList.toggle("btnGroupAnswersJS");
});

function printBothList() {
  for (let i = 0; i < correctArrObj.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = correctArrObj[i].questionTitle;
    answersUl.appendChild(newLi);

    const newUl = document.createElement("ul");
    newLi.appendChild(newUl);

    const newLi2 = document.createElement("li");
    newLi2.innerText = correctArrObj[i].answerText;
    newUl.appendChild(newLi2);
    newLi2.id = "correctLi";
    newLi2.style.color = "#00ffff";
  }
  const newHead = document.createElement("h2");
  newHead.innerText = "Correct answers: ";
  correctHead.appendChild(newHead);

  for (let i = 0; i < wrongArrObj.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = wrongArrObj[i].questionTitle;
    wrongUl.appendChild(newLi);

    const newUl = document.createElement("ul");
    newLi.appendChild(newUl);

    const newLi2 = document.createElement("li");
    newLi2.innerText = wrongArrObj[i].answerText;
    newUl.appendChild(newLi2);
    newLi2.style.color = "#d20094";
    newLi2.id = "wrongLi";

    const newLi3 = document.createElement("li");
    newLi3.innerText = wrongArrObj[i].correctAnswer;
    newUl.appendChild(newLi3);
    newLi3.style.color = "#00ffff";
    newLi3.id = "correctLi";
  }

  const newHead2 = document.createElement("h2");
  newHead2.innerText = "Wrong answers: ";
  wrongHead.appendChild(newHead2);
}
