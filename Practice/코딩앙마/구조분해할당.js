let users = ["Mike", "Tom", "Jane"];

let [user1, user2, user3] = users;
/*  아래와 같은 코드
let user1 = users[0]
let user2 = users[1]
let user3 = users[2]
*/

let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split("-");

console.log(user4); // 'Mike'

/* 배열 구조 분해 : 기본값 */

// let [a, b, c] = [1, 2];
// 이때, c는 undefined이므로 기본값을 지정한다.
let [a = 3, b = 4, c = 5] = [1, 2];
console.log(a); //1
console.log(c); //5

/* 배열 구조 분해 : 일부 반환값 무시 */
let [user7, , user8] = ["Mike", "Tom", "Jane", "Tony"];
console.log(user7); // Mike
console.log(user8); // Jane

/* 배열 구조 분해 : 바꿔치기 */
let a1 = 1;
let b1 = 2;

// 둘의 값을 바꾸고 싶을 때 임시변수 c를 만들어 사용하곤 했으나,
[a1, b1] = [b1, a1]; // 이것으로 가능하게 됨

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* 객체 구조 분해 */

let user9 = { name: "Mike", age: 30 };
let { name, age } = user9;
/* 아래와 같음 - 순서를 상관하지 않아도 ㄱㅊ
let name = user9.name;
let age = user9.age;
*/

/* 새로운 변수 이름으로 할당 */
let { name: userName, age: userAge } = user9;
console.log(userName); // 'Mike'

/* 기본값 */

let user10 = { name1: "Jane", age1: 18, gender: "female" };
let { name1, age1, gender = "male" } = user;

console.log(gender); //female - user10에 gender가 없었다면 기본값인 male로 출력
