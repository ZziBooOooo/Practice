/* console.log(window.scrollY); */

/* 스크립트 해야할 것
프로덕트, 파인드어필 페이지에서 화살표누르면 해당 컨텐츠로 이동,
헤더 없어지면 메뉴버튼 나오게
// */
// let currentscroll = window.scrollY;

const a = document.querySelector(".main_third_box_text1");
const b = document.querySelector(".main_third_box_text2");
const allMain3 = document.querySelector(".main_third");
const c = document.querySelector(".main6_textbox");
const allMain6 = document.querySelector(".main_6");
const d = document.querySelector(".Main5_text_1");
console.log(d);
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
  var scrollHeight = $(document).scrollTop();

  if (scrollHeight >= $(a).offset().top - allh3) {
    // console.log("여기");
    a.classList.add("active");
  }

  if (scrollHeight >= $(b).offset().top - allh3) {
    b.classList.add("active");
  }

  if (scrollHeight >= $(c).offset().top - allh6 * 1.5) {
    c.classList.add("active");
  }

  if (scrollHeight >= $(d).offset().top - allh5) {
    d.classList.add("active2");
  }

  if (scrollHeight >= $(e).offset().top - allh5) {
    e.classList.add("active2");
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
