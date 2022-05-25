// ch03/object5.js

for (let i = 0; i < 5; i++) {
  let temp = parseInt(Math.random() * 10) + 1; // 정수로 표현하는 parseInt
  console.log(temp);
}
Math.ceil(3.3); //ceil은 소수점을 올림해준다. 4
Math.floor(3.3); // floor은 소수점을 버린다. 3
Math.trunc(3.3); // trunc는 소수점을 잘라낸다. 3
Math.round(3.5); // 
console.log(Math.PI);

Math.floor(-3.3); // 값의 의미가 제일 최하값을 건진다 ..? 3.3은 -3 ~ -4 사이에 있으니 : -4
Math.trunc(-3.3); // -3
// let math = new Math(); 자바에선 이렇게 했다면
// math.random(); 스크립트에서는 이렇게 안해도됨


// 클로저.
function outerFuc(name) {
  let saying = 'hello ' + name;

  return function () {
    return saying; // 지역함수
  }
}
let f1 = outerFuc('홍길동');
let f2 = outerFuc('김민수');
console.log(f1());
console.log(f2());

//함수안에서 처리하고싶으면 클로저를 사용해서 처리하면 된다
// 클로저 : 함수가 실행되는 시점의 변수값을 계속 기억하고 있다가 그 값을 함수가 끝나는 이후에도 그 값을 접근해서 처리할때 쓴다.
function initFnc() {
  let cnt = 0;

  return function addCnt() {
    cnt += 1;
    console.log(cnt);
  }
  // addCnt();
  // console.log(cnt);
}
let add = initFnc();
add();
add();
add();
