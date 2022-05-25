// ch02/function.js

// ES2015
// 1. 함수선언식 정의.
function sum(num1 = 0, num2 = 0) { //초기값을 0으로 지정해둠
  if (num1 == undefined) {
    num1 = 0;
  }
  return num1 + num2;
}

// }let sum = function(num1 = 0, num2 = 0){
//   return num1 + num2;
// } 위 function sum은 이런식으로 처리가 된다

console.log(sum(10, 20)); // 30으로 출력

// 2. 함수표현식 정의.
// 자바스크립트에서는 변수에다가 할당할수있는 값이 string, number, boolean, undefined, object, function
let mySum = function (val1 = 0, val2 = 0) { //초기값을 0으로 지정해둠
  return val1 + val2;
}
let yourSum = mySum;
console.log(mySum(10, 20)); // 30으로 출력
console.log(yourSum(11, 22)); // 33으로 출력

// 3. 화살표 함수. 화살표함수는 함수나 메소드의 매개값으로 사용되어질때 사용함
let otherSum = (val1, val2) => val1 + val2;

// 배열에는 forEach();
//forEach는 매개값이 정의되어있다.
const arr = [10, 22, 17, 23, 34, 42];
let summ = 0
// arr.forEach((val, idx, ary) => { // 출력시 첫번째는 배열에 들어가있는 값이 나옴 10 , 22 ... 두번째 index값은 0 -> 6까지 출력 세번째 array값은 배열에 뭐가 있는지 보여줌
//   // if (val % 2 == 0) { // 짝수의 합 구하기
//     if(idx % 2 == 1) { //짝수번째의 합 구하기
//     summ += val;
//   }
// });
arr.forEach(getOddSum);
console.log(`짝수의 합:${summ}`); // 짝수의 합 108, 짝수번째의 합 87

// forEach 메소드의 콜백 함수
function getOddSum(val, idx, ary){
  if(idx % 2 == 1){
    summ += val;
  }
};
