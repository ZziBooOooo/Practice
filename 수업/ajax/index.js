/* aaa = [10, { x: 0, y: 100 }];
aaa = [10, { x: 0, "y-a": 100 }];

aaa[1].y;
aaa[1]["y"]; // 배열과의 혼동때문에 잘 쓰지않는다. ->
aaa[1].y - a; // 에러! 이런경우에 위의 문법을 사용한다. aaa[1]['y-a']
 */

fetch("./data.json")
  // data.json에 있는 내용을 '문자열' 형태로 response로 전달
  .then((res) => {
    return res.json(); //json메서드를 이용해 객체형태로 변환 후 반환
  })
  .then((gallery) => {
    // 변환된 데이터를 gallery로 받음
    console.log(gallery);
    console.log(gallery.data);
    init(gallery.data);
  });

function init(data) {
  const elGallery = document.querySelector(".gallery div");
  console.log(data);
  elGallery.innerHTML = `<img src=${data[0].url}>`;
}
