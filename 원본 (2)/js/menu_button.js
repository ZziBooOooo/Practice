const headerHeight = document.querySelector("header");
const menuBtn = document.querySelector(".menuBtn");

let ah = headerHeight.offsetHeight;

$(window).scroll(() => {
  if (ah <= $(document).scrollTop()) {
    menuBtn.classList.add("menuBtn_on");
    menuBtn.style = `opacity:1;`;
  } else {
    menuBtn.style = `opacity:0;`;
  }
});
