// ch05/arry.js

// 인덱스(주소)

let arr = new Array();
arr = [];

arr.push('김씨');
arr.push(20);
arr.push({ name: "황씨", id: "1001" });
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
const arr1 = [1, 2, 3, 4, 5];
// let sum = arr1.reduce((stack, el) =>{ //책에선 이렇게하고
// return stack + el;
//교수님식
let sum = arr1.reduce(function (ac, el) { // 초기값 ac에 el의 값을 더하여 
  return ac + el; // 1)ac+el / 1)ac+el / 2)ac+el / 3)ac+el ...
}, 0);
console.log(`arr1의 합: ${sum}`);

//reduce()메소드를 사용하지 않아도 forEach()메소드를 사용해서 합계를 구할수있다
let sum2 = 0;
arr1.forEach(function (el) {
  // sum2 += el; /// 책에선 이렇게 하고
  sum2 = sum2 + el;
});
console.log(`forEach로 구한 합:${sum2}`);

let arr2 = [1, 2, [3, 4], [5, 6, 7, [10, 11, { name: "hong", age: 20 }]]];

arr2[0]; // 1
arr2[2]; // [3,4]
arr2[2][0]; //[3]
//name속성을 읽어오고 싶으면 순서체크후..name은 4번째 요소에 있다
//4번째 요소안에 있는 순서를 또 체크하면 name은 4번째 요소안에 4번째 요소에 있다
//4번째안의 요소안에 4번째의 요소안에 10, 11, name이 있으므로 3번째요소
//4 -> 4-> 3 이걸 배열로 보면 3 3 2
arr2[3][3][2]['name']

arr2 = [1, [2, 3], 4, [5, 6, 7]]; // [1,2,3,4,5,6,7]

//reduce는 첫번째 요소가 누적값을 가지는 요소(stack)
//{}안에는 실행할 코드가 들어가야함
//concat은 2개 배열을 합쳐줌
let arr_concat = arr2.reduce((stack, el) => {
  // console.log(stack, el);
  return stack.concat(el); // [1]+[2,3] 첫번째 배열에 2번째 배열을 합
  // return el;
}, []);
console.log(arr_concat);

let arr3 = [1, [2, 3], 4, [5, 6, [7, 8, 9]]];
// 2차원 이상의 배열요소
// join() => 배열을 문자열로 변환
// split(구분자) => 구분자로 새로운 배열을 생성
let arr3_concat = arr3.reduce((stack, el) => {
  return stack.concat(el);
}, [])
console.log(arr3_concat); // 결과값은 [1, 2, 3, 4, 5, 6, Array(3)] 2차원배열요소는 Array(3)라고 출력.
console.log(arr3.join().split(',')); //1,2,3,4,5,6,7,8,9
// split을 사용하여 1차원 배열로 변경
