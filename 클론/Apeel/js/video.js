const parentBox = document.querySelector(".main_second");
const videoContainer = document.querySelector(".videoContainer");
const playBtn = document.querySelector(".playBtn");
const closeBtn = document.querySelector(".videoClose");
const body = document.querySelector("body");
console.log(parentBox);

console.log(parentBox.offsetTop + parentBox.offsetHeight);
//videoContainer.style = `top:${parentBox.offsetTop}px`;

playBtn.addEventListener("click", () => {
  videoContainer.classList.add("videoOn");
  body.style = `overflow:hidden`;
  
  // let timeID= setTimeout(()=>{
  //   videoContainer.style=`transition:0.5s;`
  // },1000)
});

closeBtn.addEventListener("click", () => {
  videoContainer.classList.remove("videoOn");
  body.style = `overflow-y:scroll`;
});


// videocontainer은 disPlay:none;
// .videoOn은 display:flex;
// videoContainer에 transition이 안먹는다.