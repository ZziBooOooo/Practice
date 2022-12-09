/* aaa = [10, { x: 0, y: 100 }];
aaa = [10, { x: 0, "y-a": 100 }];

aaa[1].y;
aaa[1]["y"]; // 배열과의 혼동때문에 잘 쓰지않는다. ->
aaa[1].y - a; // 에러! 이런경우에 위의 문법을 사용한다. aaa[1]['y-a']
 */

fetch("./data.json")
  // data.json에 있는 내용을 '문자열' 형태로 response로 전달
  .then((res) => {
    return res.json(); //json메서드를 이용해 객체형태로 변환 후 반환(return)
  })
  .then((gallery) => {
    // 변환된 데이터를 gallery로 받음
    console.log(gallery);
    console.log(gallery.data);
    init(gallery.data);
  });
const btn = document.querySelector(".gallery button");
function init(data) {
  const imgBox = document.querySelector(".imgBox");
  const contentImg = document.querySelector(".imgBox img");
  console.log(imgBox);
  let setFun;
  btn.onclick = function () {
    // i = 0;
    // // data.forEach((value, key) => {
    // // for (let i = 0; i < 10; i++) {
    // setFun = setInterval(() => {
    //   if (i < 10) {
    //     imgBox.innerHTML += `<img src=${data[i].url}>`;
    //     // return;
    //     i++;
    //     console.log("test");
    //   } else if (i >= 10) {
    //     clearInterval(setFun);
    //   }
    // }, 100);

    data.forEach((value, key) => {
      setTimeout(() => {
        imgBox.innerHTML += `<img src=${data[key].url}>`;
      }, 50 * key);
    });
  };
}
