//Dom
const playground = document.querySelector(".playground > ul");

//Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

// Variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
  tree: [
    [
      [2, 1],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 2],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 2],
      [0, 1],
      [2, 1],
      [1, 1],
    ],
    [
      [2, 1],
      [1, 2],
      [1, 0],
      [1, 1],
    ],
  ],
};
const movingItem = {
  type: "tree",
  direction: 0,
  top: 0,
  left: 3,
};

init();

// Functions

function init() {
  // spread Operator : movingItem의 값만 가져온다.
  // tempMovingItem의 값은 바뀌는데 init하면 초기값을 가져오도록 하려고 여기에 위치시킴
  tempMovingItem = { ...movingItem };

  for (let i = 0; i < GAME_ROWS; i++) {
    prependNewLine();
  }
  renderBlocks();
}

function prependNewLine() {
  const li = document.createElement("li");
  const ul = document.createElement("ul");
  for (let j = 0; j < GAME_COLS; j++) {
    const matrix = document.createElement("li");
    ul.prepend(matrix);
  }
  li.prepend(ul);
  playground.prepend(li);
}

// moveType 보내지않을거라서 빈값으로 초기화
function renderBlocks(moveType = "") {
  const { type, direction, top, left } = tempMovingItem; // destructuring
  // console.log(tempMovingItem.type); // 이런식으로 접근하기 싫어서 디스트럭쳐링 씀
  // console.log(type, direction, top, left);
  // console.log(BLOCKS[type][direction]);
  // console.log(BLOCKS[type]);
  const movingBlocks = document.querySelectorAll(".moving");
  // console.log(movingBlocks);
  movingBlocks.forEach((moving) => {
    moving.classList.remove(type, "moving");
    // moving 붙으면 지우고 아래에서 다시 타겟에만 클래스 추가
    // console.log(moving);
  });
  BLOCKS[type][direction].forEach((block) => {
    // console.log(block);
    const x = block[0] + left; // 배열의 첫번째값-x좌표 / 중앙에서 시작하도록 left(3)만큼 더한다.
    const y = block[1] + top; //
    // 삼항연산자는 변수에도 담을 수 있다.

    // const target = playground.childNodes[y].childNodes[0].childNodes[x];
    const target = playground.childNodes[y]
      ? playground.childNodes[y].childNodes[0].childNodes[x]
      : null; // 있으면 값을 담고 없으면 null을 담는다.
    // console.log(target);
    const isAvailable = checkEmpty(target);
    if (isAvailable) {
      target.classList.add(type, "moving"); // type은 tree이고 css에서 .tree클래스를 작성했다.
      // 키보드이벤트-> moveBlock -> renderBlock ->해서 나온 target에는 moving클래스를 추가
    } else {
      tempMovingItem = { ...movingItem };
      // 원상복구 한 뒤 렌더블록
      setTimeout(() => {
        renderBlocks(); // 재귀함수 ! - 종료조건을 setTimeOut으로 설정
        if (moveType === "top") {
          seizeBlock();
        }
      }, 0);
    }
  });

  movingItem.left = left;
  movingItem.top = top;
  movingItem.direction = direction;
  // 없으면 원상태로 돌아간다. 위에 tempMovingItem = { ...movingItem };때문
  // tempMovingItem.left=left 하면 그냥 공간을 넘어간다 - 자기자신 값을 넣는거니까 당연,,
  // movingItem의 값은 왜 바뀌는걸까.?
}
function seizeBlock() {
  console.log("seize");
  const movingBlocks = document.querySelectorAll(".moving");
  movingBlocks.forEach((moving) => {
    moving.classList.remove("moving");
    moving.classList.add("seized");
  });
}

function checkEmpty(target) {
  if (!target) {
    return false;
  }
  return true;
}

function moveBlock(moveType, amount) {
  tempMovingItem[moveType] += amount;
  renderBlocks(moveType);
}

function changeDirection() {
  /* tempMovingItem.direction += 1;
  if (tempMovingItem.direction === 3) {
    tempMovingItem.direction = 0;
  } */

  const direction = tempMovingItem.direction;
  direction === 3
    ? (tempMovingItem.direction = 0)
    : (tempMovingItem.direction += 1);
  renderBlocks();
}
// event handling

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 39:
      moveBlock("left", 1);
      break;
    case 37:
      moveBlock("left", -1);
      break;
    case 40:
      moveBlock("top", 1);
      break;
    case 38:
      changeDirection();
      break;
    default:
      break;
  }
});
