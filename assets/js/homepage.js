const btnProceed = document.getElementById("btnProceed");
const btnCheckBox = document.getElementById("checkboxFirstPage");
const aLink = document.getElementById("aLink");
const advice = document.getElementById("advice");

let valueCheckBox = btnCheckBox.checked;

btnProceed.addEventListener(
  "mouseover",
  () => (btnProceed.style.boxShadow = "0px 0px 26px 6px #00ffff")
);

btnProceed.addEventListener(
  "mouseleave",
  () => (btnProceed.style.boxShadow = "0px 0px 18px 6px #00ffff")
);

aLink.onclick = function () {
  valueCheckBox = btnCheckBox.checked;
  if (valueCheckBox) {
    window.location.replace("quiz.html");
  } else {
    advice.style.visibility = "visible";
  }
};

btnCheckBox.onclick = function () {
  valueCheckBox = btnCheckBox.checked;
  if (valueCheckBox) {
    advice.style.visibility = "hidden";
  } else {
    advice.style.visibility = "visible";
  }
};
