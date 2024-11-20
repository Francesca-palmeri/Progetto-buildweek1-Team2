let correctAnswers = localStorage.getItem("correctAnswers");

window.addEventListener("load", function () {});

const percentRight = document.getElementById("percentRight");
const percentWrong = document.getElementById("percentWrong");
const numbersCorrect = document.getElementById("numbersCorrect");
const numbersWrong = document.getElementById("numbersWrong");
const innerSign = document.getElementById("innerSign");
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
  mex.innerText = "Congratulations! You passed the exam.";
  innerSign.innerText = "✔️";
} else {
  mex.innerText = "You didn't pass the exam.";
  mailSend.style.display = "none";
  innerSign.innerText = "❌";
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
btnShowAnswers.addEventListener("click", function () {
  if (answersUl.style.display === "none") {
    answersUl.style.display = "block";
  } else {
    answersUl.style.display = "none";
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
