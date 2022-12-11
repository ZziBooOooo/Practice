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
