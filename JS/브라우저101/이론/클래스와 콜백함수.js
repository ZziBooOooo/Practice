// 클래스는 다양한 오브젝트를 만들기 위한 청사진

class Counter {
  constructor() {
    this.counter = 0;
  }

  increase() {
    // 클래스에서 함수를 선언할때는 function이라고 안써도 된다.
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      // ** 클래스 자체에서 이처럼 정의해버리면
      console.log("yo!"); // coolCounter를 쓰는 사람이 이것을 조절할 수 없다.
    } // yo 말고 다른것을 출력하고 싶다면? 아니면 console.log말고 다른걸 하고싶다면?
  }
}

const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase(); // yo!

// ** 를 해결하는 방법!
// 클래스 내에서 정의한 함수를 콜백함수로 전달하는 것
class Counter2 {
  constructor() {
    this.counter = 0;
  }
  increase(runIf5Times) {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      runIf5Times();
    }
  }
}

const coolCounter2 = new Counter2();

function printSomething() {
  console.log("yo!");
  // console.log('Wow!')  호출하는 사람이 조작 가능!
}
function alertNum(num) {
  alert(`Ten! ${num}`);
}

coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);

coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(alertNum); // 10일때는 팝업으로 나오게도 할 수 있다.

// 호출하는 숫자를 알고싶다면 runIf5Times(this.counter);
// function printSomething(num)
// console.log(`yo! ${num}`)

// 클래스 Counter에는 어떤 동작을 하는지 자체적으로 결정되어 있지 않다.
// 사용하는 사람이 원할때 콜백함수를 전달함으로서 원하는 기능을 수행할 수 있다.

// *** 여기까지 했을 때 문제점이 무엇일까?
// increase라는 함수를 호출할 때마다 인자들을 전달하려니까 불편하다...
// 함수를 쓸때마다 인자를 전달하지 않고 constructor에서 콜백함수를 받는다.!!

class Counter3 {
  constructor(runEvery5Times) {
    this.counter = 0;
    this.callback = runEvery5Times; // callback이라는 변수에 생성자 안으로 전달된 콜백함수를 할당해줌
  }
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callack && this.callback(this.counter); // this.counter라는 숫자를 인자로 전달 & this.callback이 undefined인지 아닌지 판별
    }
  }
}

function printSomething(num) {
  console.log(`wow ${num}`);
}
function alertNum(num) {
  alert(`Ten! ${num}`);
}

// 하나의 class로 다양한 object를 만들어서 서로 다른기능을 수행하게 할 수 있다. >> 재사용성 높아짐

const printCounter = new Counter3(printSomething); // new Counter(인자) 호출은 constructor(인자)가 호출된다.
const alertCounter = new Counter3(alertNum);

// constructor도 함수기 때문에 함수의 인자로 받아온 아이들을 이 클래스 자체에서 기억을 해야한다.
// 따라서, callback이라는 변수에 runEvery5Times를 할당

// 그리고 카운터를 만들 때, 생성자에 우리가 원하는 콜백함수를 전달해준다.

// coolCounter라는 object는 이 Counter라는 class의 청사진을 이용해 object를 만들었다.
// 이때, coolCounter는 Counter를 이용해 만들었으므로 counter변수는 0부터 시작하고,
// callback변수는 pirntSomething을 가리키고 있다.

// coolCounter에서 increase가 실행되는데 counter가 5배가 되면 콜백함수를 호출한다.
// this.counter는 결국 printSomething을 가리키고 있기 때문에 printSomething함수가 실행이 될것이다.

// 호출할때는 이 클래스 안에있는 counter라는 데이터를 전달해준다.

// 그런데, Counter를 만들 때, 어떤 콜백도 전달하지 않으면
// Counter의 constructor에 있는 인자는 undefined가 될 것이다.
// 즉, this.callback에 저장되는 것은 undefined. >> Type Error 발생
// increase()문단에서 this.callback()<< undefined를 호출할 수 없기 때문에
// 따라서, this.callback이 데이터가 있는지 없는지 확인하기 위한 코드가 필요하다
