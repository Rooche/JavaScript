// ch04/string1.js
//tagged literal

let str = 'Hello, World';
let message = 'Hi';
str = `${message}`;

let result = `${str == 'Hi' ? true : false}`;
console.log(result);

// 배열요소 : map: A -> B, filter: (true) A -> A, reduce: map, filter, 집계처리
let friends = [{
  name: '라이언',
  age: 5,
  score:10
}, {
  name: '어피치',
  age: 3,
  score:20
}, {
  name: '콘',
  age: 4,
  score:30
}, {
  name: '프로도', 
  age: 2,
  score:40
}];
//function(val, ind, ary)이다
let newFriends = friends.map(function (val, idx) {
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age * 2;
  obj.sno = idx + 1; //sno는 순번이다

  return obj;
});
console.log(newFriends);

//배열관련 메소드 filter
newFriends = friends.filter(function (val, idx) {
  return idx > 1; // 1보다 큰거만 반환
});
console.log(newFriends);

//reduce로 캐릭터 4개의 나이 합을 본다(집계)
newFriends = friends.reduce(function (accum, val, idx, ary) { //이전에 가지고있던 값(누적된값) accum
  // return accum + val.age; //이전에 가지고있던 accum값이랑 val.age값을 더해서 반환한다
  // 0,5 / 5,3 / 8,4 / 12,2 이게 뭐냐면 나이순서인데 0+5를 더한값을 두번째값에 넣음
  // / "5",3/ 이 값을 더한값을 세번째값에 넣음 /"8",4/ 이 값을 더해서 
  //4번째값에 넣음 / "12", 2/ 최종적으로 12 + 2 = 14가 되기에 나이의 총합 값은 14다
  // 0+5 / 5 + 3 / 8 + 4 / 12 + 2
  // }, {}); // {}로 index초기값을 확인한다
  // }, 0);
  // console.log(accum, val);
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age * 2;
  obj.sno = idx + 1;
  if (obj.age > 7) {
    accum.push(obj);
  }
  // accum.push(obj); //아무것도 없는 배열요소에 오브젝트를 담겠다는 뜻[{}] + {} /[{}] + {} 두번째는 첫번째에 담은게 누적된 상태라 또 배열에 +를 시킴 / 
  //[{},{}]+{} 세번째는 두번째에 누적된게 그대로 남아있음 거기에 배열 + 시킴 많은 값이 있다면 계속 이렇게 누적되어 커질것
  return accum; // 누적되어 담겨있는 accum을 반환시킴
}, []); //[]으로 초기값 지정
console.log(newFriends);

// --------------------------------------------------------------------------------------------------------------------------------------------------
// <ul><li>1 라이언 5 </li><li>2 어피치 3</li><li>3 콘 4</li><li>4 프로도 2</li></ul>
newFriends = friends.reduce(function (accum, val, idx, ary) {
  // console.log(accum, val);
  let tag = '';
  if (idx == 0) {
    tag += '<ul>';
  }
  tag += `<li>${val.name}, ${val.age}</li>`;
  if (idx == friends.length - 1) {
    tag += '</ul>';
  }
  return accum + tag;
}, '');
console.log(newFriends);
document.write(newFriends);

// --------------------------------------------------------------------------------------------------------------------------------------------------
// <ul><li>1 라이언 5 </li><li>2 어피치 3</li><li>3 콘 4</li><li>4 프로도 2</li></ul>
newFriends = friends.reduce(function (accum, val, idx, ary) {
  // console.log(accum, val);
  let tag = '';
  //속성의 갯수가 달라질 경우
  let rows = []; // {ame:?, age:?} -> [[name, ?], [age, ?], [score: ?]] 값이 증가하면 배열도 증가하게
  for (let field in val) { // 첫번째는 누적값(accum), 두번째는 엘리먼트(val)
    rows.push([field, val[field]]); // 배열요소를 추가
  }

  // 첫번째일 경우 처리
  if (idx == 0) {
    tag += `<table border =1><thead><tr><th>${rows.map((el) => el[0]).join('</th></tr>')}` // 필드(속성)의 갯수만큼 th를 만들었다
    tag += '</thead><tbody>'
  }
  tag += `<tr><td>${rows.map(el => el[1]).join('</td><td>')}</td></tr>`;
  if (idx == friends.length - 1) {
    tag += '</tbody></table>';
  }
  return accum + tag;
}, '');
document.write(newFriends);