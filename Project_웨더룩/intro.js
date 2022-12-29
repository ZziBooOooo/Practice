const logoImg = document.querySelector(".logoImg");
const FirstTyping = document.querySelectorAll(".FirstTyping");
const SecondTyping = document.querySelectorAll(".SecondTyping");
const p_icons = document.querySelectorAll(".a");
const icons = document.querySelectorAll(".icon");

function showIcons() {
  ipad.classList.add("animate__fadeInUpBig");
  // p_icons.forEach((p) => {
  //   p.classList.add("animate__zoomIn");
  // });

  icons.forEach((icon, key) => {
    setTimeout(() => {
      icon.classList.add("animate__zoomIn");
      icon.style.opacity = 1;
    }, key * 500);
  });

  setTimeout(() => {
    handIcon.classList.add("animate__fadeInUpBig");
    handIcon.style.opacity = 1;
  }, 2000);

  setTimeout(() => {
    handIcon.classList.remove("animate__fadeInUpBig");
    handIcon.classList.add("clickAni");
  }, 3000);

  setTimeout(() => {
    ipad.classList.remove("animate__fadeInUpBig");
    ipad.classList.add("ipadPlus");
  }, 3500);

  setTimeout(() => {
    handIcon.classList.remove("clickAni");
    handIcon.classList.add("animate__bounceOutDown");
  }, 4000);
}

function showSecondSec() {
  bgBox.classList.add("SecondSecOn");

  setTimeout(() => {
    showIcons();
  }, 500);
}
function hideAndSecondText() {
  TypingBox.classList.add("animate__zoomOutDown");
  setTimeout(() => {
    SecondTyping.forEach((txt) => {
      txt.style.opacity = 1;
    });
    TypingBox2.classList.add("animate__fadeInLeft");
  }, 600);

  setTimeout(() => {
    TypingBox2.classList.add("animate__flipOutY");
  }, 1800);

  setTimeout(() => {
    // firstSec.style.opacity = "0";
    secondSec.style.display = "flex";
    showSecondSec();
  }, 2300);
}

function showFirstText() {
  FirstTyping.forEach((txt, key) => {
    setTimeout(() => {
      txt.classList.add("typingOn");
    }, 100 * key);
  });

  setTimeout(() => {
    hideAndSecondText();
  }, 500);
}
function translateLogo() {
  logoImg.classList.add("translateLogoOn");
  let test1 = $(".logoImg");
  console.log($("body").offset());
  bodyPosition = $("body").offset();
  // $("#introCircle").remove();
  $("#introCircle").fadeOut("slow", function () {
    $(this).remove();
  });
  setTimeout(() => {
    $("#imgBox").animate({ top: "0", left: "0" }, 200);
  }, 400);
  setTimeout(() => {
    showFirstText();
  }, 800);
}

function showLogo() {
  logoImg.classList.add("logoOn");
}

window.addEventListener("load", () => {
  introCircle.classList.add("animate__bounceInDown");
  setTimeout(() => {
    introCircle.classList.remove("animate__bounceInDown");
    introCircle.classList.add("circleOn");
    smallCircle.classList.add("s_circleOn");
  }, 1000);

  setTimeout(() => {
    showLogo();
  }, 1100);
  setTimeout(() => {
    translateLogo();
  }, 2500);
});
