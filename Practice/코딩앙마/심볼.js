/* 보통 객체의 키는 문자열로 접근했다. */

const obj = {
  1: "1입니다.",
  false: "거짓",
};

Object.keys(obj); // ["1","false"]

obj["1"]; // "1입니다."
obj["false"]; // "거짓"

/* 심볼은 유일한 식별자 !  */

/* Symbol.for() - 전역심볼 */
/* 
하나의 심볼만 보장, 없으면 만들고 있으면 가져온다.
심볼함수는 매번 다른 심볼값을 생성하지만
.for메서드는 하나를 생성한 뒤 키를 통해 같은 심볼을 공유한다.
*/

const id1 = Symbol.for("id");
const id2 = Symbol.for("id");

id1 === id2; // true
Symbol.keyFor(id1); // "id" - 전역심볼일때 keyFor사용가능 , 일반심볼은 .description

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */
// 다른 사람이 만든 객체
const user = {
  name: "Mike",
  age: 30,
};

// 내가 작업한 부분
user.showName = function () {}; // 이렇게 추가하면 사용자는 showName is function() {}도 보게됨..> 심볼사용
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};

user[showName](); //실행 - 결과값 : Mike

// 사용자가 접속하면 보는 메세지
for (let key in user) {
  console.log(`${key} is ${user[key]}.`);
}
// name is Mike. age is 30.
