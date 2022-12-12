async function getName() {
  return "Mike";
}
// async 키워드가 있으면 항상 프로미스를 반환한다.
console.log(getName());
// 따라서, 함수로 호출하고 then을 사용할 수 있다.
getName().then((name) => {
  console.log(name);
});

// 함수의 반환값이 프로미스면
async function getName2() {
  return Promise.resolve("Tom");
}
getName2().then((name) => {
  console.log(name);
});

// 예외가 있다면
async function getName2() {
  // return Promise.resolve("Tom");
  throw new Error("err..");
}
getName2().catch((err) => {
  console.log(err);
});

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// await 키워드는 async 내부에서만 사용가능!

async function getName2(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName2("Mike"); // await 오른쪽에는 Promise가 온다. 이후 Promise가 처리될때까지 기다림
  console.log(result);
}

console.log("시작");
showName();
