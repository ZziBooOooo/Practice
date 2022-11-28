console.log(window.scrollY);
let currentscroll = window.scrollY;

const a = document.querySelector(".main_third_box_text2");
const b = document.querySelector(".main_third_box_text1");
const c = document.querySelector(".main6_textbox");
const d = document.querySelector(".Main5_text_1");

const header = document.querySelector(".header_desktop");
const menuBtn = document.querySelector(".menuBtn");

console.log(a);

window.addEventListener("scroll", () => {
  /* if (currentscroll >= 666) {
    a.style.backgroundColor = "Tomato";
  } */
  let currentScrollValue = document.documentElement.scrollTop;
  console.log(currentScrollValue);
  if (currentScrollValue >= 1550) {
    /*  a.style.backgroundColor = "Tomato"; */
    a.classList.add("active");
  }

  if (currentScrollValue >= 1150) {
    b.classList.add("active");
  }

  if (currentScrollValue >= 4340) {
    c.classList.add("active");
  }
  if (currentScrollValue >= 3350) {
    d.classList.add("active2");
  }

  /*   if (currentscroll >= 133) {
    menuBtn.style.position = "fixed";
    menuBtn.style.display = "block";
  } */
});

/*
컨텐츠만큼 위에서 떨어진 정도와 (ottsetTop)
현재 스크롤의 위치를 비교했을 때 (scrollTop)
이벤트? 클래스 추가
위처럼 숫자를 직접 대입 X


*/
