"use strict";

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const field = document.querySelector(".game_field");
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector(".game_button");
const gameTimer = document.querySelector(".game_timer");
const gameScore = document.querySelector(".game_score");

const popUp = document.querySelector(".pop-up");
const popUpText = document.querySelector(".pop-up_message");
const popUpRefresh = document.querySelector(".pop-up_refresh");

const carrotSound = new Audio("sound/carrot_pull.mp3");
const alertSound = new Audio("sound/alert.wav");
const bgSound = new Audio("sound/bg.mp3");
const bugSound = new Audio("sound/bug_pull.mp3");
const winSound = new Audio("sound/game_win.mp3");

let started = false;
let score = 0;
let timer = undefined; // 그냥 let timer;만 해도됨

field.addEventListener("click", onFiledClick); // (event) => (event)가 생략된 것

gameBtn.addEventListener("click", () => {
  if (started) {
    // 조건문이 false이면 실행되지 않는다..
    stopGame();
  } else {
    console.log(started);
    startGame();
  }
  //started = !started;
  // console.log(started); // false이면 true를, true이면 false를 할당
});
/* 
처음 started는 false이다.
따라서, 게임시작버튼을 처음 클릭했을 때는 startGame()이 실행된다.
이후, started는 true로 바뀐다. (즉, 게임중일 때 started는 true)
정지버튼을 누르게 되면 started=true이므로 stopGame()이 실행된다.
이후 다시 started는 false로!
*/
popUpRefresh.addEventListener("click", () => {
  startGame();
  hidePopUp();
});

function startGame() {
  started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
  playSound(bgSound);
}

function stopGame() {
  score = 0;
  started = false;
  stopGameTimer();
  hideGameButton();
  showPopUpWithText("REPLAY?");
  playSound(alertSound);
  stopSound(bgSound);
}

function finishGame(win) {
  score = 0;
  started = false;
  stopGameTimer();
  hideGameButton();
  if (win) {
    playSound(winSound);
  } else {
    playSound(bugSound);
  }
  stopSound(bgSound);
  showPopUpWithText(win ? "You Won" : "You Lost");
}

function showStopButton() {
  const icon = gameBtn.querySelector(".fa");
  icon.classList.remove("fa-play");
  icon.classList.add("fa-stop");
  gameBtn.style.visibility = "visible";
}

function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60); // 나중에 n분대로 수정하고싶다면 이게 좋음
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function showPopUpWithText(text) {
  popUpText.textContent = text;
  popUp.classList.remove("pop-up-hide");
}

function hidePopUp() {
  popUp.classList.add("pop-up-hide");
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(CARROT_COUNT === score);
      return; // 조건 만족 후 아래의 updateTimerText 실행하지 않기 위해
    }
    updateTimerText(--remainingTimeSec);
  }, 1000); // 1초마다 remainingTimeSec를 1씩 줄여가며 조건 만족까지 계속 실행
}

function stopGameTimer() {
  clearInterval(timer);
}

function initGame() {
  // 벌레와 당근 생성 후 필드에 추가
  field.innerHTML = "";
  gameScore.innerText = CARROT_COUNT;
  addItem("carrot", CARROT_COUNT, "img/carrot.png");
  addItem("bug", BUG_COUNT, "img/bug.png");
}

function onFiledClick(event) {
  //console.log(started); // 게임안할때는 false 게임중일때는 true가 나옴
  if (!started) {
    // 게임중일때만 이벤트 적용하기위해서 쓴 코드
    // !started가 true여야 return이 된다. 그럼 started는 false 이는 게임시작이 아닐때!
    // started가 아니면 함수를 나간다. 게임이 시작되지 않았을 때 함수 종료
    return;
  }
  const target = event.target;
  if (target.matches(".carrot")) {
    target.remove();
    score++;
    playSound(carrotSound);
    updateScore();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches(".bug")) {
    finishGame(false);
  }
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

function updateScore() {
  gameScore.textContent = CARROT_COUNT - score;
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute"; // 부모(게임필드)에게 relative 옵션이 있다면 부모를 기준으로 왼쪽상단이 (0,0)위치 시작
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
