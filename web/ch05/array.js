// ch05/arry.js

// 인덱스(주소)

let arr = new Array();
arr = [];

arr.push('김씨');
arr.push(20);
arr.push({name:"황씨", id: "1001"});
arr.push(["사슴", "고양이"]);

arr.pop(); // 확실하진 않은데 맨 마지막 위치를 제거하는듯 pop()
arr.unshift(["사슴", "고양이"]); //추가, 첫번째 위치에 추가시킴
arr[0] = 'test'; // 위치를 지정해서 올릴수도 있음. 이렇게 사용하면 unshift로 넣은건 사라지고 test가 들어감
arr.shift(); // 처음위치부터 제거함 shift()

arr.splice(); // 특정위치 추가
arr.splice(1, 1); // 예를 들어서 2번째 위치에 추가(첫번째는 0이기때문에 1를 쓰면 2번쨰 위치)
//splice(위치,크기,대체값);
//대체값을 안넣어주면 위치지정한곳을 삭제함
arr.splice(1, 0, "add");
arr.splice(1, 0, "add1");
arr.splice(1, 0, "add2");

arr.splice(1, 3) //두번째 위치 3개(2번째부터 3,4번째 삭제)를 (대체값이 없으므로) 삭제한다

console.log(arr);

//---------누적합 구하기--------------
const arr1 = [1,2,3,4,5];
// let sum = arr1.reduce((stack, el) =>{ //책에선 이렇게하고
// return stack + el;
debugger
//교수님식
 let sum = arr1.reduce(function(ac, el){ // 초기값 ac에 el의 값을 더하여 
   return ac + el; // 1)ac+el / 1)ac+el / 2)ac+el / 3)ac+el ...
}, 0);
console.log(`arr1의 합: ${sum}`);

//reduce()메소드를 사용하지 않아도 forEach()메소드를 사용해서 합계를 구할수있다
let sum2 = 0;
arr1.forEach(function(el){
  // sum2 += el; /// 책에선 이렇게 하고
  sum2 = sum2 + el;
});
console.log(`forEach로 구한 합:${sum2}`);