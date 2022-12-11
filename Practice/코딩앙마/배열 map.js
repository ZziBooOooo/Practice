/* 
* map 메서드는 배열 내의 모든 요소 각각에 대해
주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

*/

let userList = [
  { name: "mike", age: 30 },
  { name: "Jane", age: 20 },
  { name: "Tom", age: 10 },
];

// 함수 안의 매개변수 user은 userList의 객체 하나하나씩!
let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});

console.log(newUserList);
console.log(userList);
