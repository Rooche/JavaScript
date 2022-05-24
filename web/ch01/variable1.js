// variable1.js : 변수의 호이스팅
var sum2;
// var myName;

let sum = 10; // 변수선언, 값을 초기화.
console.log(sum); // 자바와 똑같이 변수를 먼저 선언하고 그다음 콘솔로 나오게 해야함

console.log(sum2); // 호이스팅은 끌어올린다라는것이므로 이 밑에 sum2를 선언한건 읽지만 값을 못읽어 undefined라고 뜬다
var sum2 = 100;

console.log(myName()); //호이스팅이 됨 / 참조타입변수여서()를 붙여줘야함 ex)...log(myName());

// 자바스크립트에서 object(참조타입변수) => object, array, function(){}
function myName(){
  return '홍길동';
}

// var result = 100;
let result = 100;
{// 블럭단위의 범위 let
  let result = 50; // 원래는 100이지만 let은 지역변수라 블록을 나가는순간 그 값이 사라져 100으로 출력이 된다
} // 만약 var로 출력하면 전역변수라 콘솔은 50으로 출력이 된다.
function run(){
  // 함수안에서 선언된 변수는 지역변수(local variable)
  var result = 0; //run이라는 변수안에서 result를 새로 선언해서 0으로 출력
  console.log(result);
}
run(); // run이라는 변수안에서 result를 새로 선언해서 0으로 출력

console.log(result); //function밖에 있는 result값이 그대로 출력