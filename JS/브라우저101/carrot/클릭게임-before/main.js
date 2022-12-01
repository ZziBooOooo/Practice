// 게임 시작 후 정지 버튼을 누르면 >> 구현을 못함 생각도못햇음 ㅜ

const startBtn = document.querySelector(".startBtn");
let timer = document.querySelector(".timer");
const retryBox = document.querySelector(".retryBox");
const winBox = document.querySelector(".winBox");
const retryBtn = document.querySelector(".retry");
const retry_winBtn = document.querySelector(".retry_win");
const imgBox = document.querySelector(".imgBox");
let left_carrot = document.querySelector(".left_carrot");

function changeBtn() {
  startBtn.innerHTML = `<i class="fa fa-stop"></i>`;
}

function showRetry() {
  retryBox.classList.toggle("retryBox_toggle");
  startBtn.classList.toggle("startBtn_toggle");
}
function showWin() {
  winBox.classList.toggle("winBox_toggle");
  startBtn.classList.toggle("startBtn_toggle");
}

let runTimer;

function startTime() {
  let timeleft = 10;

  runTimer = setInterval(() => {
    timeleft--;
    timer.textContent = `00:0${timeleft}`;

    if (timeleft <= 0) {
      clearInterval(runTimer);
      timer.textContent = "Game Over";
      showRetry();
      bugaudio.play();
      bgaudio.pause();
    }
  }, 1000);
}

function hideImg() {
  const carrotImg = document.querySelectorAll(".carrotPosition");
  const bugImg = document.querySelectorAll(".bugPosition");
  for (i = 0; i < carrotImg.length; i++) {
    carrotImg[i].style.display = "none";
  }
  for (i = 0; i < bugImg.length; i++) {
    bugImg[i].style.display = "none";
  }
}
function allResetGame() {
  showWin();
  startTime();
  hideImg();
  randomImg();
  bgaudio.play();
  winaudio.pause();
}
function resetGame() {
  showRetry();
  startTime();
  hideImg();
  randomImg();
  bgaudio.play();
  winaudio.pause();
}

function bugclick() {
  clearInterval(runTimer);
  showRetry();
  playBugSound();
}

function randomImg() {
  let test = [];
  left_carrot.textContent = 10;
  for (let i = 10; i > 0; i--) {
    const carrotImg = document.createElement("img");
    carrotImg.src = "img/carrot.png";

    let imgWidthPosition = Math.floor(Math.random() * 670);
    let imgHeightPosition = Math.floor(Math.random() * 170);
    carrotImg.setAttribute("class", "carrotPosition");
    carrotImg.style.left = imgWidthPosition + "px";
    carrotImg.style.top = imgHeightPosition + "px";
    imgBox.appendChild(carrotImg);

    carrotImg.addEventListener("click", () => {
      carrotImg.setAttribute("class", "carrotvisible");
      playCarrotSound();

      test.push(carrotImg);
      //console.log(test);

      left_carrot.textContent = 10 - test.length;
      if (left_carrot.textContent === "0") {
        console.log("ww");
        clearInterval(runTimer);
        showWin();
        playWinSound();
      }
    });
  }

  for (let i = 10; i > 0; i--) {
    let imgWidthPosition = Math.floor(Math.random() * 670);
    let imgHeightPosition = Math.floor(Math.random() * 170);

    const bugImg = document.createElement("img");
    bugImg.src = "img/bug.png";

    bugImg.setAttribute("class", "bugPosition");
    bugImg.style.left = imgWidthPosition + "px";
    bugImg.style.top = imgHeightPosition + "px";

    imgBox.appendChild(bugImg);
    bugImg.addEventListener("click", bugclick);
  }

  // 왜 여기다하면 안되는겨??????*****
  //clearInterval(runTimer);
  //showRetry();
  // startTimer함수 끝나게
  //이김 + 다시하기 창 띄우기
}
const bgaudio = new Audio("sound/bg.mp3");
const winaudio = new Audio("sound/game_win.mp3");
const bugaudio = new Audio("sound/bug_pull.mp3");
const carrotaudio = new Audio("sound/carrot_pull.mp3");

function playBgSound() {
  bgaudio.play();
}

function playWinSound() {
  bgaudio.pause();
  winaudio.play();
}

function playBugSound() {
  bugaudio.play();
  bgaudio.pause();
}

function playCarrotSound() {
  carrotaudio.play();
}
startBtn.addEventListener("click", changeBtn);
startBtn.addEventListener("click", startTime);
startBtn.addEventListener("click", randomImg);
startBtn.addEventListener("click", playBgSound);

retryBtn.addEventListener("click", resetGame);

retry_winBtn.addEventListener("click", allResetGame);
