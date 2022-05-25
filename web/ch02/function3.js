// ch02/function3.js

// 고차함수 => 변수할당. 함수에서 반환되는 값으로 함수
let arr = [];

//메소드의 매개값으로 함수사용
arr.forEach(function () {

});

// 함수의 반환값으로 함수사용
function addFnc() {
  return function (a, b) {
    return a + b;
  }
}

let fnc = addFnc();
console.log(fnc(10, 20)) // 결과값 30

const s1 = {
  sno:'001',
  score: 80
}
const s2 = {
  sno:'002',
  score: 90
}
arr.push(s1);
arr.push(s2);

let newArr = arr.filter(function(val, ind, ary){ //val는 오브젝트 타입 위에 s1과 s2를 보면됨
  return val.score >= 90; // val(오브젝트 s2)에 있는 score를 리턴
});
console.log(newArr);