$("body").prepend("<header>");

// $("body").append("<footer>");

$("header").load("../index.html header>.header_desktop", head); // 콜백함수

// $("footer").load("./inc.html footer>div");

/* $("header a").click(function () {
  alert("명령"); // 적용안됨 - .load()는 비동기
}); */

function head() {
  $(".right .hyo").click(function (e) {
    // e.preventDefault();
    $(".right .hyo").eq(idx).addClass("on");
    console.log($(".right .hyo").eq(idx));
    let idx = $(this).index(); //.index()는 0,1,2,3..이 아니라 부모로부터 0,1 부모로부터 0,1 이런식으로 들어간다.
    localStorage.idx = idx;
  });
}

const headerHeight = document.querySelector("header");
const menuBtn = document.querySelector(".menuBtn");

let ah = headerHeight.offsetHeight;
let idx = localStorage.idx || 0;

/* $(window).scroll(() => {
  if (ah <= $(document).scrollTop()) {
    menuBtn.classList.add("menuBtn_on");
    menuBtn.style = `opacity:1;`;
  } else {
    menuBtn.style = `opacity:0;`;
  }
});
 */
