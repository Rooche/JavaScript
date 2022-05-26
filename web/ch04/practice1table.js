// ch04/practice1.js

// 배열요소 : map: A -> B, filter: (true) A -> A, reduce: map, filter, 집계처리
let friends = [{ name: '라이언', age: 5 }, { name: '어피치', age: 3 }, { name: '콘', age: 4 }, { name: '프로도', age: 2 }];
//function(val, ind, ary)이다
let newFriends = friends.map(function (val, idx) {
  let obj = {};
  obj.sname = val.name;
  obj.age = val.age * 2;
  obj.sno = idx + 1; //sno는 순번이다

  // return obj;
  return [`${obj.sno}`, `${obj.sname}`, `${obj.age}`]; // ['1|라이언|5', 2|어피치|3, 3|콘|4, 4|프로도2]'
});
// console.log(newFriends.join('-'));
// let tag = '<ul><li>' + newFriends.join('</li><li>') + '</li></ul>';
// document.write(tag);

let tag1 = '<table border = 1><tr>'
// tag1 += `${newFriends.map(elem => '<td>' + elem.sno + '</td><td>' + elem.sname + '</td><td>' + elem.age + '</td>').join('</tr><tr>')}`; // return obj;를 쓰면된다
tag1 += `${newFriends.map(elem => '<td>' + elem[0]+ '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td>').join('</tr><tr>')}`; // return [`${obj.sno}`, `${obj.sname}`, `${obj.age}`]; 를 쓰면된다
tag1 += `</tr></table>`
document.write(tag1);

// document.write('<table border=1><tr><td>1</td><td>라이언</td><td>4</td></tr></table>');