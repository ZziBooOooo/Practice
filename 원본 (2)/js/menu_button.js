const headerHeight = document.querySelector("header");
const menuBtn = document.querySelector(".menuBtn");
// console.log(headerHeight.offsetHeight)

let a = headerHeight.offsetHeight;

$(window).scroll(() => {
  //   console.log(headerHeight.offsetHeight);
  //   console.log($(document).scrollTop());

  if (a <= $(document).scrollTop()) {
    console.log("hi");
    // alert('d')
    console.log(menuBtn);
    menuBtn.classList.add("menuBtn_on");
    menuBtn.style = `opacity:1;`;
  } else {
    menuBtn.style = `opacity:0;`;
  }
});
// css에서 스타일하면 적용이 안됨 ->
