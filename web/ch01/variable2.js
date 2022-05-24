// variable2.js
// 원시형데이터 타입 vs. 참조형 데이터 타입
// string, number, boolean, undefined vs. object(object{}, array[], function())

let str1 = 'hello';
let str2 = str1;
// 문자열 표현할때 '' 또는 "" 또는 `` 로 가능하다
console.log(`str1 => ${str1}, str2 => ${str2}`); // str1 + ', ' + str2라고 쓰기엔 너무 귀찮으니 `${} + ${}` 라고 쓴다
str2 = 'nice';
console.log(`str1 => ${str1}, str2 => ${str2}`);

let obj1 = { // 오브젝트가 가지고 있는 주소값을 가지고 있는다 라는 뜻
  fname: 'hong'
}
let obj2 = obj1;
console.log(`obj1 => ${obj1.fname}, obj2 => ${obj2.fname}`);
obj2.fname = 'hwang';
console.log(`obj1 => ${obj1.fname}, obj2 => ${obj2.fname}`); // obj2가 obj1을 바라보고 있는데 같은 참조값이다보니 참조값 하나를 바꿔도 둘다 바뀐다

const obj3 = { // 오브젝트를 선언할때는 const를 사용한다
  fname: 'park'
}
obj3.fname = 'kim';
console.log(obj3.fname);

// obj3 = { 이렇게는 변경 또는 사용불가
//   fname: 'kim'
// }

//심볼 
let sym1 = Symbol('text');
let sym2 = Symbol('text');

console.log(sym1 == sym2); //같은 값으로 만들어도 결과는 false

let hong = {
  sym1:'홍길동'
}