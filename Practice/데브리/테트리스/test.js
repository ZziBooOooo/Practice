const BLOCKS2 = {
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

const movingItem2 = {
  type2: "tree",
  direction2: 0,
  top2: 0,
  left2: 3,
};

/* const { type2, direction2, top2, left2 } = movingItem2;
console.log(type2); // tree
console.log(direction2); //0
console.log(BLOCKS2); // {tree:Array(4)}
console.log(BLOCKS2[type2]); // 객체[키] => 객체의 키에 해당하는 값
//BLOCKS[type2]는 tree배열을 부른것
console.log(BLOCKS2[type2][direction2]);
// [direction2]는 0이라서 tree객체의 첫번째값이 나온것
 */

let tempMovingItem2 = { ...movingItem2 };

tempMovingItem2.left2 = 5;
console.log(tempMovingItem2);
console.log(movingItem2);
