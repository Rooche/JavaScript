// variable.js
// 전역객체(window), 전역변수.

var avar = '안녕'; //var로 변수를 선언하면 전역변수(window 객체 소속)
let alet = '안녕'; //let으로 변수를 선언하면 window객체 소속이 아니다

//window.alert('반갑습니다!!');
console.log(this.avar); // 전역영역에서 this는 window를 뜻함 그래서 var는 출력이된다
console.log(this.alet); // 그러나 window에 소속 되어있지 않은 let은 undefined라고 나온다

function run(){
  console.log(this.avar);
  console.log(this.alet);
}
run();

console.log(avar);
console.log(alet);