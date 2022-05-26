// ch03/object6.js
// 오브젝트에 속성 = 속성값 (속성값이 함수이면 메소드)
const friends = ['김씨', '박씨', '최씨']
let obj = {
  sname: '홍길동',
  age:20,
  getInfo: function(){
    return this.sname;
  }
}
obj.phone = '010-1234-5678'; //이렇게도 속성추가가 가능함
obj.friends = friends;
obj.age = -10;

Object.defineProperty(obj,'score',{ 
  set: function(score){
    if(score < 0){
      alert('점수가 0보다 작습니다.')
    } else if(score >= 100){
      alert('점수가 100보다 큽니다.')
    } else {
      this._score = score;
    }
  },
  get: function(){
    return this._score;
  }
});
obj.score = 30;
// obj._score = -10;

console.log(obj); //obj.friends라고 하면 3명의 정보를 보여주며 obj.friends[0]라고 하면 첫번째 정보만 보여준다.

// 객체의 복사
let refObj = obj;

let copyObj = Object.assign({}, obj); //assign은 새로운 오브젝트 하나를 만들어 카피해줌, 서로 다른 객체로 취급
                                      //assign {}안에 아무것도 없으니 빼오고 안에 있으면 ... 뭐라고 하는지 모르겠음
copyObj.age = 30;

console.log(copyObj, obj);