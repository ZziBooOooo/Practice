/* fetch("./data.xml")
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    console.log(data);
  });
 */

// ajax, fetch는 데이터를 보낼 수도 있다.
// 하지만, json, xml은 프로그래밍 할 수 있는 문서가 아니라 단순히 데이터이기 때문에
// 관리할 수는 없다. 수정이 가능한 문서를 받게된다면 가능하다. + 메소드도 추가될 것!
$.ajax({
  url: "./data.xml",
  beforeSend: () => {
    console.log("준비");
  },
  complete: () => {
    console.log("완료");
  },

  error: () => {
    console.log("데이터 불러오기 실패"); // * xml url경로 바꿔서 테스트해보기
  },
  success: function (data) {
    console.log("데이터 불러오기 성공");
    // console.log(data);
    // console.log($(data).find("item").eq(0).find("url").text());
    // console.log($(data).find("item").eq(0).find("detail").text());

    // console.log($(data).find("item").eq(0).find("detail").html());
    // console.log($(data).find("detail").html());
    // console.log($(data).find("detail").eq(1).html());
    // 형제요소가 있던 없던 detail태그를 모두 가져와서 배열로 저장해둔다.
    // 따라서, eq로 원하는 것을 찾아와야 한다.
    /* 
    let url = $(data).find("url").eq(0).html();
    let title = $(data).find("title").eq(0).html();
    let detail = $(data).find("detail").eq(0).html(); */
    // console.log(url, title, detail);

    console.log($(data).find("item").eq(1).html());
    console.log($(data).find("item").length); // 내장메서드도 사용가능

    /*     $(data)
      .find("item")
      .forEach(() => {}); // But, 타입에러 발생 */

    // forEach 대신 each
    let tag = "";
    let url;
    let title;

    $(data)
      .find("item")
      // * 매개변수의 위치

      .each((key, value) => {
        // console.log(key, value);
        // value.url -> 객체일때 방식, 하지만 xml은 '태그'이다.
        console.log($(value).find("url").text()); // jQuery 메서드를 사용할거면 변수도 jQuery 방식으로
        // $("body").append(`<img src="${$(value).find("url").text()}">`);

        url = $(value).find("url").text();
        title = $(value).find("title").text();
        tag += `<figure>
                    <img src="${url}">
                    <figcaption>${title}</figcaption>
               </figure>`;
        //  들어가는 순서가 바뀜
        // 계속 앞쪽으로 추가하니까@ 1.png가 뒤로 밀림

        // & 바닐라에서는 append로 img 글씨를 써도 문자열로 인식한다.
        // 따라서, 이미지태그를 만드는 createElement메서드를 사용해야한다.
        // jQuery는 html태그로 인식하기 때문에 더 간편하게 사용할 수 있다.
      });
    $(".gallery > div").html(tag);

    // figure 3개 모두 선택됨
    $(".gallery figure").click(function () {
      let key = $(this).index();
      console.log(this);
      console.log(key);
      let detail = $(data).find("item").eq(key).find("detail").html();
      alert(detail);
    });
  },
});

// title, url 등은 실제 html태그가 아니므로 이 자체를 사용할 수 없다.
// html에서도 사용하고 싶다면 존재하는 html태그로 만들던가 >?

// 제이쿼리는 쿼리셀렉터, 쿼리셀렉터올 필요없이 그냥 가져오면 된다...... ?
