// ch03/object3.js
// 인스턴스 : 필드 , 생성자, 메소드.
// 프로토타입 : 메소드(함수)의 참조값.

let year = 2022;
let month = 5; // 6월달. 0 ~ 11까지니깐 0이1월임
let today = new Date(); // 현재시점 년월일 시분초
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
console.log(today.toLocaleString());
today = new Date('2022-06-01');
// today = new Date(2022, 04, 0); // 4월 마지막날
// today = new Date(2022, 04, 1); // 5월의 1날
today = new Date(year, month + 1, 0);
today = new Date(year, month, 1);
console.log(today.getDay()); //요일정보를 알수있음 예를들면 0->일요일 1->월요일 .. 3->수요일 ..
console.log(today.getDate()); // 날짜정보
let day = today.getDay();
let lastDate = today.getDate();

console.clear();

// 교수님 에디션
function showCalendar(year, mon) {
  document.write(`<h3>${year}년 ${mon}월 달력</h3>`);
  // code HERE
  let da = new Date(year, mon - 1);
  let firstDay = da.getDay(); //첫날의 요일정보
  let to = new Date(year, mon, 0);
  let lastDate = to.getDate();

  let tableTag = '<table border=1>';
  //요일
  const days = ['포', '기', '직', '전', '힘', '들', '다'];
  //요일 정보 생성
  tableTag += '<thead><tr>';
  for (let day of days) {
    tableTag += '<th>' + day + '</th>';
  }
  tableTag += '</tr></thead>';

  tableTag += '<tbody><tr>'
  //요일정보 보여주기
  for (let n = 0; n < firstDay; n++) {
    tableTag += '<td></td>';
  }
  // 날짜정보 보여주기
  for (let day = 1; day <= lastDate; day++) {
    tableTag += '<td>' + day + '</td>';
    if ((firstDay + day) % 7 == 0) {
      tableTag += '</tr><tr>';
    }
  }
  tableTag += '</tr></tbody></table>';
  document.write(tableTag);

}

showCalendar(2022, 10); //6월달 달력


// Date.prototype.toCustomString = function() { //date에는 쓸수있는 메소들이
//   // console.log(this);
//   let year = this.getFullYear();
//   let month = ('0' + (this.getMonth() + 1)).slice(-2); //0 ~ 11으로 나오니깐 +1를 해준다. slice(-n)
//   let date = this.getDate();
//   return `${year}-${month}-${date}`;
// }

// console.log(today.toCustomString());