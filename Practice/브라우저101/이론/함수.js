function add(num1,num2){
    return num1 + num2 ; 
}
// 선언하기만 하면(작성시점) num1과 num2라는 비어있는 공간이 생성되어 있다.
// 따라서 당연히 데이터타입도 없다. (호출하는 사람에 의해 결정될 것)

const sum = add(3,4); // 함수를 호출함 >> num1,num2에 각각 3,4가 저장되고 코드블럭 실행

const doSomething = add; // 어떤 메모리에 함수 자체를 저장한다.
// 변수 add에는 이 함수를 가리키는 레퍼런스가 저장된다.
// Object와 마찬가지로 변수 doSomething에는 add를 가리키는 레퍼런스가 저장

const result = doSomething(2,3);
console.log(result); // 5

// 함수의 이름자체는 함수가 정의된 곳을 가리키고 있다.


function surprise(operator) { 
    const result = operator();
    console.log(result);
}

surprise(add); 
// surprise에 add를 할당하게 되면 add에는 함수를 가리키고 있는 주소가 저장되어있으므로
// 따라서 surprise함수의 인자인 operator에는 add의 레퍼런스가 복사되어 전달된다.
// 그러므로, operator역시 add를 가리키는 레퍼런스가 저장되어 있으므로
// result - operator()에서 operator을 실행한다는 것은
// 결국 함수 add를 실행한다는 것이다.

// 이대로만 실행한다면 NaN이 나온다. why?
// operator()은 결국 add()라고 했었으므로, add의 인자 num1, num2가 필요하기때문!
// operator(2,3)처럼 인자를 넣어주면 정상출력된다.


function divide(num1, num2){
    return num1 / num2;
} // surprise(divide) 하면 나누는 함수를 실행하는 것~