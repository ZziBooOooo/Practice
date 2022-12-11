// 생성자 함수
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};

const mike = new User("Mike", 30);

// 클래스
/* 클래스 내부에서 정의된 메소드(showName)는
   User2의 프로토타입에 저장된다.
   mike는 객체 내부에 showName이 있고,
   tom은 프로토타입 내부에 showName이 있다. (콘솔창에서 확인가능)
*/
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 19);

// for in문에서 클래스의 메소드는 제외된다.

for (const p in tom) {
  console.log(p);
}

/*  생성자함수에서 클래스와 동일하게 나타내려면?
    기존 showName을 지우고 아래를 추가.
*/
User.prototype.showName = function () {
  console.log(this.name);
};

/* 클래스의 장점 */

/* 실수로 new없이 작성하면 생성자함수는 그냥 변수에 undefined가 저장
    그러나, 클래스는 오류발생
    & constructor가 클래스임을 표시해준다.
*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* 클래스의 상속 - extends */

class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive");
  }
  stop() {
    console.log("stop");
  }
}

class Bmw extends Car {
  park() {
    console.log("park");
  }
}

const z4 = new Bmw("blue");

// 콘솔에 z4 쳐서 확인

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* 메소드 오버라이딩 */

class Bmw extends Car {
  park() {
    console.log("park");
  }

  stop() {
    console.log("off");
  }
}
// z4.stop(); 해보면 off 출력! -> 동일 메소드 존재 시 덮어쓴다.

// 부모의 메소드를 사용하고 싶으면? -> super사용
class Bmw extends Car {
  park() {
    console.log("park");
  }

  stop() {
    super.stop();
    console.log("off");
  }
}
// z4.stop(); 해보면 stop, off 둘 다 출력

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* 클래스 오버라이딩 - constructor */

class Car2 {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive");
  }
  stop() {
    console.log("stop");
  }
}

class Bmw2 extends Car2 {
  constructor() {
    this.navigation = 1;
  }
  park() {
    console.log("park");
  }
}

const x4 = new Bmw2("blue"); // 이렇게만 하면 오류가 뜬다.

class Car2 {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive");
  }
  stop() {
    console.log("stop");
  }
}

class Bmw2 extends Car2 {
  constructor(color) {
    super(color);
    this.navigation = 1;
  }
  park() {
    console.log("park");
  }
}

const x6 = new Bmw2("blue");

// 클래스의 constructor은 빈 객체가 먼저 만들어지고 this로 이 객체를 가리킨다.
// 그러나 extends를 사용해서 만들어지는 자식 클래스는 이 작업을 건너뛴다.
// 따라서, 부모 클래스의 constructor를 실행해야 한다.
