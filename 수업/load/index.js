$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header>div", head); // 콜백함수

$("footer").load("./inc.html footer>div");

/* $("header a").click(function () {
  alert("명령"); // 적용안됨 - .load()는 비동기
}); */

function head() {
  $("header a").click(function () {
    alert("명령"); // 적용안됨 - .load()는 비동기
  });
}
