// ch02/function1.js
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
const friends = [hong, hwang, park];
// 테이블생성 , 테이블은 웹으로 확인해야한다
//<table><tr><th>타이틀</th></tr> <tr><td>데이터</td></tr> </table>
function createTable(ary = []) {
  let tag = '<table border=1>';
  tag += createHeader(ary[0]);
  //tr, td생성.
  for (let i = 0; i < ary.length; i++) {
    tag += createTr(ary[i]);
    // tag += '<tr>';
    // for (let field in ary[i]) {
    //   tag += '<td>' + ary[i][field] + '</td>'
    // }
    // tag += '</tr>';
  }
  tag += '</table>';
  return tag;
}

// obj => 속성
// <table><thead> ... </thead><tbody>...</tbody></table>
function createHeader(obj = {}) {
  let thead = '<thead><tr>';

  for (let field in obj) {
    thead += `<th>${field}</th>`;
  }
  thead += '</tr></thead>'

  return thead;
}

function createTr(obj = {}) {
  // <tr><td>데이터</td></tr>
  let tr = '<tr>';

  for(let field in obj){
    tr += `<td>`+obj[field] + `</td>`;
  }
  tr += '</tr>'

  return tr
}

// mock_data때문에 잠시 주석처리
// let result = createTable(friends);
// document.write(result);