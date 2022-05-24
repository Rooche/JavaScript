// variable3.js

//string(문자열타입) -> number(숫자타입)으로 바꿔줌
let int1 = window.parseInt(3.234); //parseInt는 window(웹브라우저)가 가지고 있는 최상위
int1 = parseInt('3.14'); //parseInt는 문자열 숫자인 값도 알아서 숫자타입으로 바꿔 정수로 바꿔줌
int1 = parseInt('hello'); //문자는 숫자타입으로 바꿀수없음 Not A Number
console.log(int1);

let double1 = window.parseFloat('3.14');
double1 = parseFloat('3.14abc'); //3.14는 출력하되 뒤에 문자는 다 없애줌, 숫자타입으로 바꿀수있는 만큼은 바꿔주지만 처음이 문자열이면 사용불가능
console.log(double1);

console.log('3' + '7'); //이렇게만하면 그냥 37이라고만 출력이 됨
console.log(parseInt('3') + parseInt('7')); //parseInt를 붙여 숫자타입으로 만들면 10이라고 출력이 됨
//개발자도구에서 색이 파란색이면 숫자타입으로 생각하면 됨

// number(숫자타입) -> string(문자열타입)으로 바꿔줌
console.log(3);
console.log((3).toString());
let arr = [1,2,3];
console.log(arr.toString()); // 배열 요소를 문자열로 변환시킴 구분자: ,
console.log(arr.join('-')); //join을 사용하여 구분자:,를 -로 변환시켜줌

let parentObj = {
  fname:'window',
  lname:'close',
  childObj:{
    fname:'document',
    lname:'open',
    grandChild:{
      hobby:['run', 'reading']
    }
  }
}

console.log(parentObj.childObj.grandChild.hobby[0]);