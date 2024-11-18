const btnProceed = document.getElementById("btnProceed");
const btnCheckBox = document.getElementById("checkboxFirstPage");
const aLink = document.getElementById("aLink");
const advice = document.getElementById("advice");
const adviceText = document.getElementById("advice").innerHTML;
let valueCheckBox = btnCheckBox.checked;

btnProceed.addEventListener(
  "mouseover",
  () => (btnProceed.style.boxShadow = "0px 0px 26px 6px #00ffff")
);

btnProceed.addEventListener(
  "mouseleave",
  () => (btnProceed.style.boxShadow = "0px 0px 10px 4px #00ffff")
);

aLink.onclick = function () {
  valueCheckBox = btnCheckBox.checked;
  console.log(valueCheckBox);
  if (valueCheckBox) {
    aLink.setAttribute("href", "quiz.html");
  }
};

btnCheckBox.onclick = function () {
  valueCheckBox = btnCheckBox.checked;
  if (valueCheckBox) {
    advice.innerHTML = "";
  } else {
    advice.innerHTML = adviceText;
  }
};
