const stars = document.querySelectorAll(".star");
const btnMoreInfo = document.getElementById("moreInfo");
let isClicked = false;
let starIndex = 0;

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
    btnMoreInfo.disabled = false;
    stars.forEach((starArr) => {
      if (isClicked) {
        starArr.classList.remove("selected");
      }
      if (!(starArr.id > starIndex)) {
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
  () => (btnMoreInfo.style.boxShadow = "0px 0px 10px 4px #00ffff")
);

btnMoreInfo.addEventListener("click", function () {
  if (isClicked) {
    window.location.href = "https://epicode.com/it/";
  }
});

/*
const star1 = document.getElementById("1");
star1.addEventListener("mouseenter", function () {
  starIndex = 1;
  star1.classList.toggle("hovered");
});
const star2 = document.getElementById("2");
star2.addEventListener("mouseenter", function () {
  starIndex = 2;
  stars.forEach((star) => {
    if (!(star.id > starIndex)) {
      star.classList.toggle("hovered");
    }
  });
});
const star3 = document.getElementById("3");
star3.addEventListener("mouseenter", function () {
  starIndex = 3;
  stars.forEach((star) => {
    if (!(star.id > starIndex)) {
      star.classList.toggle("hovered");
    }
  });
});
const star4 = document.getElementById("4");
star4.addEventListener("mouseenter", function () {
  starIndex = 4;
  stars.forEach((star) => {
    if (!(star.id > starIndex)) {
      star.classList.toggle("hovered");
    }
  });
});
const star5 = document.getElementById("5");
star5.addEventListener("mouseenter", function () {
  starIndex = 5;
  stars.forEach((star) => {
    if (!(star.id > starIndex)) {
      star.classList.toggle("hovered");
    }
  });
});
const star6 = document.getElementById("6");
star6.addEventListener("mouseenter", function () {
  starIndex = 6;
  stars.forEach((star) => {
    if (!(star.id > starIndex)) {
      star.classList.toggle("hovered");
    }
  });
});
const star7 = document.getElementById("7");
star7.addEventListener("mouseenter", function () {
  starIndex = 7;
  stars.forEach((star) => {
    if (!(star.id > starIndex)) {
      star.classList.toggle("hovered");
    }
  });
});
const star8 = document.getElementById("8");
star8.addEventListener("mouseenter", function () {
  starIndex = 8;
  stars.forEach((star) => {
    if (!(star.id > starIndex)) {
      star.classList.toggle("hovered");
    }
  });
});
const star9 = document.getElementById("9");
star9.addEventListener("mouseenter", function () {
  starIndex = 9;
  stars.forEach((star) => {
    if (!(star.id > starIndex)) {
      star.classList.toggle("hovered");
    }
  });
});
const star10 = document.getElementById("10");
star10.addEventListener("mouseenter", function () {
  starIndex = 10;
  stars.forEach((star) => {
    star.classList.toggle("hovered");
  });
});*/
