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
    [],
    [],
    [],
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
  // spread Operator : movingItem의 값만 가져오기 때문에 temp의값은 변경되지 않는다.
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

function renderBlocks() {
  const { type, direction, top, left } = tempMovingItem; // destructuring
  // console.log(tempMovingItem.type); // 이런식으로 접근하기 싫어서 디스트럭쳐링 씀
  // console.log(type, direction, top, left);
  // console.log(BLOCKS[type][direction]);
  // console.log(BLOCKS[type]);
  const movingBlocks = document.querySelectorAll(".moving");
  movingBlocks.forEach((moving) => {
    moving.classList.remove(type, "moving");
    // console.log(moving);
  });
  BLOCKS[type][direction].forEach((block) => {
    // console.log(block);
    const x = block[0] + left; // 중앙에서 시작하도록 left(3)만큼 더한다.
    const y = block[1] + top;
    const target = playground.childNodes[y].childNodes[0].childNodes[x];
    console.log(target);
    target.classList.add(type, "moving");
  });
}

function moveBlock(moveType, amount) {
  tempMovingItem[moveType] += amount;
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
    default:
      break;
  }
});
