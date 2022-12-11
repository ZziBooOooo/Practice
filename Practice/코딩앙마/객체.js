// 객체에서 사용가능한 메서드

/* 
Object.assign() - 복제. 같은 키가 있다면 덮어씀
Object.keys() - 키를 배열로 반환
Object.values() - 값을 배열로 반환
Object.entries() - 키,값을 배열로 반환(쌍으로 묶어서줌)
Object.fromEntries - 키,값 배열을 객체로 반환
*/

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

let n = "name";
let a = "age";

const user1 = {
  [n]: "Mike",
  [a]: 30,
  [1 + 4]: 5, // 키가 5인 프로퍼티
};

console.log(user1);

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

function makeObj(key, val) {
  return {
    [key]: val,
  };
}

const obj = makeObj("나이", 33);
// const obj = makeObj("성별", "male"); // 키값이 어떤게 될지 모르는 객체를 만들 때 유용

console.log(obj);

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

const user = {
  name: "ZziBoo",
  age: 4,
};

// const cloneUser = user; // 복사가 된 것일까? No. user에는 객체가
/* 들어간 것이 아니라 참조값이 들어가 있음.
  따라서, cloneUser에도 참조값만 할당.
  cloneUser.name='zzirang'하면 user에서도 바뀜 */
const cloneUser = Object.assign({}, user); // 올바른 객체복제.

cloneUser.name = "Tom";
console.log(user.name); // ZziBoo
console.log(cloneUser.name); // Tom
