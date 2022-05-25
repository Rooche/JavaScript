// ch03/object2.js

// 함수 table 생성.
// 클래스로 table 생성.

class Table {
  constructor(data) { //생성자
    this.tag = '';
    this.aryData = data; //aryData에 ary가 가진 배열형태가 들어갈것
  }
  creatHeader() { // head정보 만드는곳
    this.tag += '<thead><tr>'
    for (let field in this.aryData[0]) {
      this.tag += `<th>${field}</th>`;
    }
    this.tag += '</tr></thead>';
  }
  creatBody() {
    this.tag += '<tbody>';
    for (let obj of this.aryData) {
      this.tag += '<tr>';
      for (let field in obj) {
        this.tag += `<td>${obj[field]}</td>`;
      }
      this.tag += '</tr>';
    }
    this.tag += '</tbody>';
  }
  creatTable() { //메소드
    this.tag += '<table border = 1>';
    // header 정보.
    this.creatHeader();
    // body 정보.
    this.creatBody();

    this.tag += '</table>';
    return this.tag;
  }
}

let ary = [{
  sno: '1001', 
  sname: '이길동', 
  score: 80
}, {
  sno: '1002', 
  sname: '홍길동', 
  score: 85
}, {
  sno: '1003', 
  sname: '박길동', 
  score: 90
}];
Table.prototype.getTagInfo = function(){ //gettaginfo를 추가한거와 똑같다
  console.log(this.tag);
}
let table = new Table(ary);
let str = table.creatTable(); // creatTable이 메소드를 호출하면 <table><thead>타이틀</thead><tbody>데이터</tbody></table>
document.write(str);
table.getTagInfo();