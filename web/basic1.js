// basic1.js

// [오브젝트1, 오브젝트2, 오브젝트3]
// 오브젝트
const hong = {
  memberId: '001',
  memberNm: '홍길동',
  memberAge: 20
}
const hwang = {
  memberId: '002',
  memberNm: '황길동',
  memberAge: 22
}
const park = {
  memberId: '003',
  memberNm: '박길동',
  memberAge: 24
}

const members = [hong, hwang, park];

// for of, for in <-오브젝트일경우는 이걸 사용함
for(let member of members){
  // hong, hwang, park
  for(let field in member){
    //memberId, memberNm, memberAge
    console.log(field + ' => ' + member[field]);
  }
}
//document영역은 
document.write('<h3>hello</h3>');
document.write('<ul>');
document.write('<li>사과</li>');
document.write('<li>수박</li>');
document.write('<li>참외</li>');
document.write('</ul>');

let table = '<table border=1>';
table += '<tr><th>회원아이디</th><th>회원이름</th><th>회원나이</th></tr>';

//배열의 수 만큼 반복
for(let member of members){
  table +='<tr>';
  //필드의 수 만큼 반복
  for(let field in member){
 // table += '<tr><td>' + member.memberId +'</td><td>' + member.memberNm + '</td><td>' + member.memberAge + '</td></tr>'; // for in까지사용해서 해보기에 잠굼
    table +='<td>' + member[field] + '</td>'
  }
  table +='</tr>';
}
table +='</table>'
document.write(table)