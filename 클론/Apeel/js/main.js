/* console.log(window.scrollY); */

const a = document.querySelector(".main_third_box_text2");
const b = document.querySelector(".main_third_box_text1");
const allMain3 = document.querySelector(".main_third");
const c = document.querySelector(".main6_textbox");
const allMain6 = document.querySelector(".main_6");
const d = document.querySelector(".Main5_text_1");
const e = document.querySelector(".Main5_text_2");
const allMain5 = document.querySelector(".Main_5");
// let ah = a.offsetHeight;
// let bh = b.offsetHeight;
const allh3 = allMain3.offsetHeight;
const allh6 = allMain6.offsetHeight;
const allh5 = allMain5.offsetHeight;
// console.log(b);

/* window.addEventListener("scroll", function () {
  console.log(b);
  console.log($(b).offset().top);
  console.log($(b).scrollTop());
}); */

$(window).scroll(function () {
  if ($(b).offset().top - window.innerHeight * 0.8 < window.pageYOffset) {
    b.classList.add("active");
  }

  if ($(a).offset().top - window.innerHeight * 0.8 < window.pageYOffset) {
    a.classList.add("active");
  }

  if ($(d).offset().top - window.innerHeight * 0.8 < window.pageYOffset) {
    d.classList.add("active2");
  }
  if ($(e).offset().top - window.innerHeight * 0.8 < window.pageYOffset) {
    e.classList.add("active2");
  }
  if ($(c).offset().top - window.innerHeight * 0.9 < window.pageYOffset) {
    c.classList.add("active2");
  }
});

// window.addEventListener("scroll", () => {
/* if (currentscroll >= 666) {
    a.style.backgroundColor = "Tomato";
  } */
// let currentScrollValue = document.documentElement.scrollTop;
/*   console.log(currentScrollValue);
  if (currentScrollValue >= 1550) {
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
  } */

/*   if (currentscroll >= 133) {
    menuBtn.style.position = "fixed";
    menuBtn.style.display = "block";
  } */
// });

/*
컨텐츠만큼 위에서 떨어진 정도와 (ottsetTop)
현재 스크롤의 위치를 비교했을 때 (scrollTop)
이벤트? 클래스 추가
위처럼 숫자를 직접 대입 X


*/
