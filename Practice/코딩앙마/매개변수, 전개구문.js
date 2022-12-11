/* 
    ** arguments
     함수로 넘어온 모든 인수에 접근가능
     함수 내에서 이용 가능한 지역변수
     length / index
     배열이 아닌 Array 형태의 객체
     배열의 내장메서드(forEach,map)는 사용불가
     
*/

function showName(name) {
  console.log(arguments.length); //2
  console.log(arguments[0]); // 'Mike'
  console.log(arguments[1]); // 'Tom'
}
showName("Mike", "Tom");

/* 
    ** 나머지 매개변수
    정해지지 않은 개수의 인수 를 배열로 나타낼 수 있게 함
     
     
*/

function showName(...names) {
  // ...뒤는 배열의 이름!
  console.log(names);
}

showName(); // [] - 전달하지않으면 undefined가 아닌 빈 배열
showName("Mike"); // ['Mike']
showName("Mike", "Tom"); // ['Mike','Tom']

/* 예제 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

/* 전달받은 모든 수를 더해야 하는데
   함수에 전달되는 매개변수의 숫자가 매번 다르다면..?
*/

function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => {
    // 배열메소드 사용가능한 장점
    result += num;
  });
  console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* user객체를 만드는 생성자 함수 */

function User(name, age, ...skills) {
  // 사람마다 스킬은 다를수도 -> 나머지매개변수(항상 뒤에 위치)
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "Js", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* 전개구문 */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [0, ...arr1, ...arr2, 7, 8, 9]; // [0,1,2,3,4,5,6,7,8,9]

/* 전개구문 : 복제 */
let arr3 = [3, 4, 5];
let arr4 = [...arr3]; // [3,4,5]

let user4 = { name: "Mike", age: 30 };
let user5 = { ...user4 };

user5.name = "Tom";
console.log(user4.name); // 'Mike'
console.log(user5.name); // 'Tom'  >> Object.assign을 이용하지 않고도 객체 복사가능!

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* 전개구문 예제 */

// arrayA를 [4,5,6,1,2,3] 으로!

let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];

arrayB.reverse().forEach((num) => {
  arrayA.unshift(num);
});

arrayA = [...arrayB, ...arrayA];

/* 객체 */
let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// 전개구문 없이 하려면 ...
user = Object.assign({}, user, info, {
  skills: [],
});
fe.forEach((item) => {
  user.skills.push(item);
});
lang.forEach((item) => {
  user.skills.push(item);
});

// 전개구문 이용
user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log(user);
