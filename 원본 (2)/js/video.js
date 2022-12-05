const parentBox = document.querySelector(".main_second");
const videoContainer = document.querySelector(".videoContainer");
const playBtn = document.querySelector(".main_second button");
const closeBtn = document.querySelector(".videoClose");
console.log(parentBox);

console.log(parentBox.offsetTop + parentBox.offsetHeight);
//videoContainer.style = `top:${parentBox.offsetTop}px`;

playBtn.addEventListener("click", () => {
  console.log("hi");
  videoContainer.classList.add("videoOn");
  /*   videoContainer.style = `top:${parentBox.offsetTop}px`; */
});

closeBtn.addEventListener("click", () => {
  videoContainer.classList.remove("videoOn");
});
