const btns = document.querySelectorAll(".main4_btnbox button");
const btn15 = document.querySelector(".main4_btn15");
const btn30 = document.querySelector(".main4_btn30");
// console.log(btn1);

let leftImgWrapper = document.querySelectorAll(".leftImg_wrapper img");
let rightImgWrapper = document.querySelectorAll(".rightImg_wrapper img");
let leftImg = document.querySelector(".leftImg");

let elDiv = document.querySelector(".leftImg_wrapper");

/* console.log(leftImgWrapper);
console.log(leftImg); */

let image = [
  ["5555.png", "6666.png"],
  ["3333.png", "4444.png"],
  ["1111.png", "2222.png"],
];

let idx = 0,
  blen = true;

btns.forEach(function (btn, key) {
  btn.addEventListener("click", () => {
    if (blen) {
      blen = false;
      leftImgWrapper[0].src = `./images/contents/${image[key][0]}`;
      rightImgWrapper[0].src = `./images/contents/${image[key][1]}`;

      leftImgWrapper[0].style = `opacity:1; transition:1s`;
      rightImgWrapper[0].style = `opacity:1; transition:1s`;

      leftImgWrapper[1].style = `opacity:0; transition:1s`;
      rightImgWrapper[1].style = `opacity:0; transition:1s`;

      setTimeout(() => {
        leftImgWrapper[1].src = `./images/contents/${image[idx][0]}`;
        rightImgWrapper[1].src = `./images/contents/${image[idx][1]}`;

        leftImgWrapper[0].style = `opacity:0; transition:0s`;
        rightImgWrapper[0].style = `opacity:0; transition:0s`;

        leftImgWrapper[1].style = `opacity:1; transition:0s`;
        rightImgWrapper[1].style = `opacity:1; transition:0s`;
        blen = true;
      }, 1000);

      idx = key;
    }
  });
});

/* btn1.addEventListener("click", () => {
  leftImg.className = "fadeable";

  window.setTimeout(function () {
    leftImg.className += "fade-in";
  }, 1000);
}); */
