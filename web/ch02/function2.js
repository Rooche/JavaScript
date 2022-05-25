// ch02/function2.js

function sum(n1, n2, n3) { // 여기서 변수를 선언 했지만 변수로 처리하는게 아니다 변수 n1 ~ n3없애도 됨
  let result = 0;
  for (let i = 0; i < arguments.length; i++) { //arguments라는 함수가 처리하는것으로 됨
    result += arguments[i];
  }
  // return n1 + n2 + n3;
  return result;
}

console.log(`결과:${sum(10, 20, 30, 40)}`);

function mySum(a1, a2, ...arg) { //가지고 오는 갯수만큼 ..
  //a1 값이 없을 경우
  if (a1 == undefined) {
    return 0;
  }
  if(a2 == undefined){
    return a1;
  }

  let result = 0;
  arg.forEach((val) => { // forEach()안에 function을 넣어도 되고 아니면 화살표로 해도됨
    result += val;
  });
  return a1 + a2 + result;
}
console.log(`mySum: ${mySum(1,2,3,4,5,6,7,8)}`);

// ...arg : 펼침연산자.
let arr1 = [1,2,3]; //결과값 123
let arr2 = arr1; // 결과값 123
arr2[3] = 4; // arr2의 4번째 자리에 4를 추가 결과값 arr1과 arr2는 1234로 출력

let arr3 = [...arr1]; // 주소복사 X, 새로운 배열 복사
arr3.push(5);

console.log(arr1, arr3); // 결과값 arr1 1234 arr3는 12345