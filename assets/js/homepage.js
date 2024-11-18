const btnProceed = document.getElementById("btnProceed");
const btnCheckBox = document.getElementById("checkboxFirstPage");
const aLink = document.getElementById("aLink");
let valueCheckBox = btnCheckBox.value;

document.addEventListener("load", init());

btnProceed.addEventListener(
  "mouseover",
  () => (btnProceed.style.boxShadow = "0px 0px 26px 6px #00ffff")
);

btnProceed.addEventListener(
  "mouseleave",
  () => (btnProceed.style.boxShadow = "0px 0px 10px 4px #00ffff")
);
