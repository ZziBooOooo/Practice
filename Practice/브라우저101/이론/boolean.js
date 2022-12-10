// false : 0, -0, ''(빈문자열), null, undefined
// true : -1, 1, 2, 'hello', [](배열은 오브젝트 자체이기 때문), 'false'

let num; // undefined
if (num) {
    console.log('true!');
} else {
    console.log('false!');
} // false 출력

let num2 = 4;
num2 && console.log(num2); // &&은 앞이 true이면 뒤도 실행
// num2 = 4(0 제외 숫자는 true이므로) 뒤의 코드도 실행


// 활용?
let obj ;

if(obj){
    console.log(obj.name);
}

obj && console.log(obj.name); // 프로그래밍 실행시 없는 데이터에 접근 = 매우 나쁨
// 따라서, 이런 코드를 쓰는 것(obj가 있다면 name에 접근)
// 위의 if와 같은 의미지만 더 깔끔해서 이렇게 많이 씀