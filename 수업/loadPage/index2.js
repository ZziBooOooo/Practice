function pageLoad(pageUrl, i) {
  console.log(pageUrl);

  $("main").removeClass("active");

  setTimeout(function () {
    $("main").load(pageUrl, function () {
      $(this).addClass("active");
    });
  }, 500);

  //addClass(), removeClass(), toggleClass(), hasClass()
  $("header a").removeClass("on").eq(i).addClass("on");
}

// history.pushState({ page: 0, url: "main.html" }, "test"); // 클릭안했을 때도 pushState

$("header a").on("click", function (e) {
  e.preventDefault();
  let url = $(this).attr("href");
  let idx = $(this).index();

  console.log($(this));
  console.log(url);
  console.log(idx);

  //let url = this.getAttribute('href');
  history.pushState({ page: idx, url: url }, "test"); // 클릭하는 시점에 pushState

  pageLoad(url, idx);
});

// pageLoad("main.html", 0); // 메인페이지 로드
$("header a:first").trigger("click"); // 강제로 클릭이벤트 발생 -> 메인페이지로드 , 클릭함수 실행이므로
// 아래의 pushState도 필요없어짐
$(window).on("popstate", function () {
  let idx = history.state.page;
  let url = history.state.url;
  console.log(idx);
  pageLoad(url, idx);
});

/*  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

/* 리소스 남는 이유때문에 좋은 방식이 아니당 *^^* */

/* 
    ajax( fetch, load, $.ajax )- 비동기방식 (순서대로실행)
    동기 - 문서의 순서에 따라 실행하는 방식
*/

/* 
# 헤더로드

# 내용로드(히스토리 리소스 누적)
*/
