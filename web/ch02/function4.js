// ch02/function4.js

var a = 1;
var b = 5;

function outerFnc() {
  function innerFnc() {//outerFnc안에서만 사용가능한 function. 밖에선 사용불가
    a = b;
  }
  console.log(a); //결과값 1
  a = 3; // console.log(a); 결과값 3으로 출력됨
  b = 4; 
  innerFnc(); // a값에 b의 값을 할당시킴
  console.log(a); // a = b가 되었으므로 결과값 4
}

outerFnc();