let css = `<style>
             main{opacity:0; transition:1s}
            .active{opacity:1}
         </style>`;
$("body").append(css);

function pageLoad(pageUrl, i) {
  $("main").removeClass("active");

  setTimeout(function () {
    $("main").load(pageUrl, function () {
      // 페이지 변경 후 클래스 추가
      $(this).addClass("active");
    });
  }, 500);

  $("header a").css("color", "blue").eq(i).css("color", "red");
}

pageLoad("main.html");

$("header a").on("click", function (e) {
  e.preventDefault();
  let url = $(this).attr("href");
  //   let url = this.getAttribute('href');  바닐라 ver.
  let idx = $(this).index();

  history.pushState({ page: idx }, url); //클릭할 때마다 히스토리에 기록 남김

  pageLoad(url, idx);
});

/* ajax, fetch 등은 리소스가 누적된다. -> 어떻게 해결할 수 있을까  */

// history.pushState()
