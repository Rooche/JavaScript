// basic.js
//자바스크립트에서의 변수의 선언 : var, let
//자바스크립트는 자바와 다르게 변수가 var와 let뿐이다

var fname = 'hello'; // string
fname = 100; // number
fname = true; // boolean
fname = null; // '', 0 => null (object 타입)

var lname; // nundefined  이렇게 선언하면 전역변수라고 한다

console.log(typeof lname); //변수에 대한 타입을 알려주는건 typeof

console.clear(); // 로그정보 초기화
var lname = 'hong'; //var라는 변수는 여러번 선언이 가능하다
console.log(lname);

{
  let lname = 'hwang'; // let이라는 변수는 2번 선언이 불가능하다 에러발생
  console.log(lname); // 이렇게 선언하면 지역변수라고 한다
}
console.log(lname);

{
  let lname = 'park' // {}를 넣어 이 블록안에서만 선언하게 하면 에러는 나오지 않음
  console.log(lname);
}

const age = 10; // const 상수선언(변하지 않는 값)
//age = 20; // 이렇게 입력시 에러가 나옴 상수를 바꾸고 싶으면

// 학생: 이름, 나이, 학번 => 자바스크립트에선 이런걸 오브젝트타입이라고 부름
const student = {
  fname: '홍길동',
  age: 20,
  sno: '22-0001',
  info:function(){ // 메소드(함수) 
    return this.fname + ', ' + this.age;
  }
}
console.log(student.fname); //student안에 있는 fname의 값을 불러온다
console.log(student['age']); //배열기호처럼 []를 사용하여 student안에 있는 age를 불러온다 이런 방식으로도 값을 가져올수있음
let fieldName = 'sno'; //let으로 fielName에 sno값을 넣어줌
console.log(student[fieldName]); //student의 sno를 가져온다
console.log(student['info']());
debugger;

//오브젝트일 경우 속성만큼 반복하겠다 for..in
for(let field in student){ // 필드의 갯수만큼 반복해서 값을 가져옴
    console.log(field + ', ' + student[field]);//첫번째 필드값은 fname(홍길동), age(20), sno(22-0001)
}


// 자바스크립트에서는 {}는 오브젝트 타입을 선언할때 씀
// 배열:
const numAry = [10, 34, 15, 22];
console.log(numAry[0]);
for(let i = 0; i<numAry.length; i++){
  console.log(numAry[i]); // 각각의 값들을 불러온다
}

//확장 for..of
for(let num of numAry){
  console.log(num);
}