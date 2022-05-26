// map
// 속성 => 속성값 : map
let obj = {
  sname: 'hong',
  age: 10
}

let map = new Map();
//키와 밸류를 set과 get으로 등록
//키 값은 중복된 값이 들어올 수 없다.
map.set('sname', 'hong');
map.set(10, 2);
map.set(obj, 3);
map.set('sname', 'hwang');
console.log(map.size); //맵에 총 몇개의 값이 있는지 알려주는 size.
//원래라면 4로 표시되야겠지만 같은 sname이라는 키값이 있으므로 hong -> hwang으로 덮어져어서 3으로 표시됨
let val = map.get('sname');
console.log(val);

// entery 값 반환 => 배열.
for (let [key, val] of map.entries()) {
  console.log(`key => ${key}, val => ${val}`); // key가 object를 표현할때 그냥 object로 표현한다(콘솔창에 그냥 object => object 라고 나옴)
};
for (let key of map.keys()) {
  console.log(`key => ${key}`);
};
map.values();

console.log(map.size);

console.clear();
let friends = [{ name: "홍길동", age: 20 }, { name: "김민수", age: 22 }, { name: "최민식", age: 25 }];

friends = [["홍길동", 20], ["김민수", 22], ["최민식", 25]];

map = new Map(friends);
for (let [key, val] of map.entries()) {
  console.log(`key => ${key}, val => ${val}`);
};
// map.get(key) = val;

let tag = '<ul>';
for (let [key, val] of map.entries()) {
  // console.log(key, val)
  tag += createLists(key, val);
};
tag += '</ul>'
document.write(tag);

function createLists(k, v) {
  // console,log(k, v);
  //return <li>속성 - 속성값</li>
  return `<li>${k} - ${v}</li>`;
}