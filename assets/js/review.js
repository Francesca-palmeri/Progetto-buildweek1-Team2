const stars = document.querySelectorAll(".star");
const btnMoreInfo = document.getElementById("moreInfo");
const advice = document.getElementById("advice");
let isClicked = false;
let starIndex = 0;
let pickedRate = 0;

stars.forEach((star) => {
  star.addEventListener("mouseenter", function () {
    starIndex = parseInt(star.id);
    stars.forEach((starElem) => {
      if (!(parseInt(starElem.id) > starIndex)) {
        starElem.classList.toggle("hovered");
      }
    });
  });
});

stars.forEach((star) => {
  star.addEventListener("mouseleave", function () {
    stars.forEach((starHov) => {
      starHov.classList.remove("hovered");
    });
  });
});

stars.forEach((star) => {
  star.addEventListener("click", function () {
    isClicked = true;
    pickedRate = star.id;
    advice.style.visibility = "hidden";
    stars.forEach((starArr) => {
      if (isClicked) {
        starArr.classList.remove("selected");
      }
      if (!(parseInt(starArr.id) > starIndex)) {
        starArr.classList.add("selected");
      }
    });
  });
});

btnMoreInfo.addEventListener(
  "mouseover",
  () => (btnMoreInfo.style.boxShadow = "0px 0px 26px 6px #00ffff")
);

btnMoreInfo.addEventListener(
  "mouseleave",
  () => (btnMoreInfo.style.boxShadow = "0px 0px 18px 6px #00ffff")
);

btnMoreInfo.addEventListener("click", function () {
  if (isClicked) {
    alert(`Your feedback is ${pickedRate}⭐. Thank you!`);
    window.location.href = "https://epicode.com/it/";
  } else {
    advice.style.visibility = "visible";
  }
});
