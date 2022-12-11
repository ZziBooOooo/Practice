const car = {
  wheels: 4,
  drive() {
    console.log("drive..");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

// bmw, benz, audi에는 car에 있는 모든 내용들이 공통으로 들어있었다.
// 이를 상의개념의 car객체를 만들어 이 안에 넣었다.

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

bmw; // {color:"red", navigation :1}
bmw.color; // "red"
bmw.wheels; // 4 -> 일단 bmw에서 wheels를 찾고 없으면 car에 가서 찾는다.

// 상속은 계속 이어질 수 있다.

const x5 = {
  color: "white",
  name: "x5",
};

x5.__proto__ = bmw;

x5.navigation; // 1

for (p in x5) {
  console.log(p); // color,name,navigation,wheels,drive 모두 나옴
}
// for in문에서 현재가지고 있는 값만 나오게하고싶다면 x5.hasOwnProperty 메서드 사용

Object.keys(x5); // ["color","name"]
Object.values(x5); // ["wheels","x5"]

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 생성자함수 이용 프로토타입

const cars = {
  // 동일한 내용을 갖고있는 부분을 따로 뺌
  wheels: 4,
  drives() {
    console.log("drives");
  },
};

const Bmws = function (color) {
  this.color = color;
  /* wheels : 4,
    drives(){
        console.log('cars');
    } */
};

const x55 = new Bmws("red");
const z44 = new Bmws("blue");

/* x55.__proto__ = cars;
z44.__proto__ = cars; */ //이 부분을 아래처럼 변경가능 -> 객체 cars부분도 필요없어짐!
// 프로토타입 한줄로 중복코드를 줄일 수 있다.

/* Bmws.prototype.wheels = 4;
Bmws.prototype.drives = function () {
  console.log("drives");
};
Bmws.prototype.stop = function () {
  console.log("STOP!");
}; */

// 위에서 아래처럼 줄일 수 있다. 하지만, z44.constructor === Bmws 는 false!
// 수동으로 constructor:Bmws 를 추가하거나 위의 방식으로 사용
Bmws.prototype = {
  wheels: 4,
  drive() {
    console.log("drive");
  },
  stop() {
    console.log("STOP!");
  },
};

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// instanceof 메서드!
z44 instanceof Bmws; // true; z44는 Bmws를 이용해 만들어진 인스턴스
z44.constructor === Bmws; // true; constructor은 프로퍼티, 생성자를 가리킨다.
