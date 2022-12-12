const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});

// state : pending, result : undefined

// 3초 후 ...

// state : fulfilled, result : 'OK'

pr.then(
  function (result) {
    // 이행되었을 때 실행
    console.log(result + "가지러 가자!");
  },
  function (err) {
    // 거부되었을 때 실행
    console.log("다시 주문해주세요");
  }
);

// 위의 방법보다는 아래가 더 좋다! 오류처리 - catch 사용!

pr.then(function (result) {}).catch(function (err) {});

// finally는 이행이든 거부든 처리 완료 후 항상 실행!

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('ok');
    reject(new Error("err..."));
  }, 1000);
});

console.log("시작");

pr2
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("err");
  })
  .finally(() => {
    console.log("끝");
  });

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/*
const f1 = (callback) => {
  setTimeout(function () {
    console.log("1번 주문 완료");
    callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(function () {
    console.log("1번 주문 완료");
    callback();
  }, 3000);
};

const f3 = (callback) => {
  setTimeout(function () {
    console.log("1번 주문 완료");
    callback();
  }, 2000);
};

 console.log("시작");
f1(function () {
  f2(function () {
    f3(function () {
      console.log("끝"); // 콜백지옥
    });
  });
}); */

const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번주문완료");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번주문완료");
      // rej('xxx');
    }, 3000);
  });
};
const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번주문완료");
    }, 2000);
  });
};

f1() // 프로미스체이닝
  .then((res) => f2(res)) // f1은 프로미스를 반환, 이때 실행결과인 res를 f2에 넘긴다.
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    console.log("끝");
  });

// Promise.all - 6초의 시간이 3초로 단축 > 한꺼번에 시작한다.
// rej가 있다면 아무런 데이터도 못받아온다는 차이가 있다.
// 하나의 정보라도 누락되면 페이지를 보여주면 안되는 경우 사용할 수 있다.
console.time("x");
Promise.all([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd("x");
});

// Promise.race - 하나라도 완료되면 끝냄console.time("x");
Promise.race([f1(), f2(), f3()]).then((res) => {
  console.log(res);
  console.timeEnd("x");
});

// async, await 문서참고
console.log("시작");
async function order() {
  const result1 = await f1();
  const result2 = await f2(result1);
  const result3 = await f3(result2);
  console.log(result3);
  console.log("종료");
}
order();

// 에러처리 - try, catch문
console.log("시작");
async function order() {
  try {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
  } catch (e) {
    console.log("종료");
  }
}
order();

// Promise.all 사용
console.log("시작");
async function order() {
  try {
    const result = await Promise.all([f1(), f2(), f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();
