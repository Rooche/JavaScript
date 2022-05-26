// set
// 속성 => 속성 : set

let set = new Set();
set.add("홍길동");
set.add(20);
set.add({}); // 오브젝트 타입은 size가 늘어남
set.add("홍길동");
//키와 밸류가 같은 값이다보니 키와 같은 부분은 누적시키지 않고 처음 홍길동을 마지막 홍길동으로 덮어씌워 3개로 표현된다.
console.log(set.size);

//키와 밸류를 리턴해주는 방식
//key, value => entrise();
for(let[key, val] of set.entries()){
  console.log(`key: ${key}, val: ${val}`); 
 // 출력시 key: 홍길동, val: 홍길동
 // key: 20, val: 20
 //key: [object Object], val: [object Object]
 // 속성 => 속성 , key = val
 // key값과 val값은 동일하다
}

set.keys(); // key값 반환
set.values(); //value 반환

let obj1 = {name:"hong"}; // 오브젝트 타입은 중복이 되서 size크기가 늘어남
let obj2 = {name:"hong"}; // size로 확인시 2개가 같아도 size에 누적되서 5로 출력

set.add(obj1);
set.add(obj2);
console.log(set.size);
