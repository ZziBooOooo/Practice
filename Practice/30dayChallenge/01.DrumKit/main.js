const drumBox = document.querySelectorAll(".drum");

window.addEventListener("keydown", (e) => {
  const divBox = document.querySelector(`.drum[data-key="${e.keyCode}`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}`);
  console.log(e.keyCode);
  divBox.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  removeClass(divBox);
});

function removeClass(divBox) {
  divBox.classList.remove("playing");
}
