/* 배열정렬 - sort 이용할때 Lodash 사이트 가보기!! */

Array.reduce(); // 인수로 함수를 받는다.
//                (누적계산값, 현재값) => { return 계산값 };

let arr = [1, 2, 3, 4, 5];

let result = 0;
arr.forEach((num) => {
  result += num;
});

const result2 = arr.reduce((prev, current) => {
  return prev + current;
}, 0); // 0은 초기값, 안쓰면 배열의 첫번째요소가 들어감

let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 25 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

/* let result3 = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []); */

/* let result3 = userList.reduce((prev, cur) => {
  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
  return prev;
}, []); */

let result3 = userList.reduce((prev, cur) => {
  return (prev += cur.age);
}, 0);

console.log(result3);
