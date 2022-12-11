toString(); // ** 10진수를 2진수 혹은 16진수로 변환

let num = 10;
num.toString(); //"10"
num.toString(2); //"1010"

let num2 = 255;
num2.toString(16); //"ff"

ceil(); // ** 올림
floor(); // ** 내림
round(); // ** 반올림

toFixed(); // ** 소수점 자릿수

let userRate = 30.1234;
userRate.toFixed(2); // "30.12"
userRate.toFixed(0); //"30"
userRate.toFixed(6); //"30.123400"

// 주의점 - toFixed는 "문자열"로 반환! 숫자로 변환하는 작업이 필요

isNaN(); // ***isNan만이 Nan인지 아닌지 판단할 수 있다.

let x = Number("x"); // Nan
x == NaN; // false
x === Nan; // false
Nan == Nan; // false
isNaN(x); // true
isNaN(3); // false

parseInt(); // ** 문자열을 숫자로, Number와 다른점은 문자열이 섞여도 동작
// 숫자로 인식하다 문자열을 만나면 끝내기때문에 숫자로시작하면 Nan
let margin = "10px";
parseInt(margin); //10
Number(margin); //Nan

let redColor = "f3";
parseInt(redColor); //Nan
