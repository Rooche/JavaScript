// ch03/object1.js

// let obj = {}; 이렇게 써도 되고 이게 더 편하다
let obj = new Object(); // 클래스구문 설명한다고 추가한것
obj.sname = '홍길동';
obj.age = '20';
obj['score'] = 80;
obj.getInfo = function(){
 return `이름은 ${this.sname}, 나이는 ${this.age}, 점수는 ${this.score} 입니다.`;
}

console.log(obj.getInfo());

// ES2015.(2015년에 추가된 class)
class Student{ //여기서 this속성은 public이다
  constructor(sno, sname, score){
    this.sno = sno;
    this.sname = sname;
    this.score = score;
  }
  //메소드
  // getName(){
  //   return this.sname;
  // }
  // setName(){
  //   this.sname = sname;
  // }
  getInfo(){
    return `이름은 ${this.sname}, 점수는 ${this.score}, 연락처는 ${this.phone} 입니다.`;
  }
  setPhone(phone){
    this.phone = phone;
  }
  set gender(gen){ //메소드처럼 보이지만 메소드는 아니고 속성값이다
    this._gender = gen;
  }
  get gender(){ // 실제 젠더의 값을 가진건 아니고 _gender라는 값이지만 Male로 그냥 가렸다?
    return this._gender;
  }
  getGender(){
    return this._gender;
  }
}

let s1 = new Student('1001', '최길동', 80);
s1.setPhone('010-1234-5678'); //setPhone을 만들어서 이렇게 추가함
s1.gender = 'Male';
console.log('성별:' + s1.gender);
console.log(`학생이름: ${s1.sname}`);
console.log(`학생점수: ${s1.score}`);

let Students = [];
Students.push(s1);
Students.push(new Student('1002', '김민수', 83)); // 배열 요소 추가
Students[1].setPhone('010-4321-8765'); //setPhone을 만들어서 이렇게 추가함

// Students.forEach(val => {
//   console.log(val.getInfo());
// });
console.table(Students);

class Estimate{
  constructor(param){
    this.unit = param;
  }

//견적가 얻기 메소드
getEstimate(unittype, width, height){
  let priceInfo = this.unit.find(item=>item.type == unittype);
  return priceInfo.price*width*height;
}
//배열에 요소 추가 메소드
addUni(unit){
  unit.push(unit);
  }
}
let unitInfo = [{type: "wood", price: 10}, {type: "iron", price: 20}, {type: "plastic", price: 30}]
const estimator = new Estimate(unitInfo);
let result = estimator.getEstimate('wood', 20, 20);
console.log(result);