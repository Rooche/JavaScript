// ch05/array1.js
// String.indexOf() => 인덱스/ -1 있으면 인덱스값을 반환해주고 없으면 -1
// Array.indexOf(찾을값, 시작위치) => 인덱스/ -1 첫번째위치는 찾을값, 두번째위치는 시작위치
// Array.find() => 찾을값/ undefined

let arr1 = ['펭수', '라이언', '어피치', '콘', '브라운', '무지'];
let idx = arr1.indexOf('라이언') // 배열에서 시작해서 0 ~ 6이니깐 라이언은 2번째에 있으니 1로 반환
console.log(idx);
// idx = arr1.indexOf('라이언', 2) // 배열의 2번째(어피치) 위치부터 찾는데 라이언이 없으므로 -1로 반환
idx = arr1.indexOf('라이언', idx + 1) // 위 방식대로 해도되고 이렇게해도 됨
console.log(idx);

let find_arr1 = arr1.find(el => el == '라이언1'); // 라이언1이라는 값은 없으므로 undefined으로 출력
find_arr1 = arr1.find(el => el == '라이언'); // 라이언이라는 값은 있으므로 라이언 으로 출력
console.log(find_arr1);

console.clear();
let arr4 = ['펭수', '라이언', '어피치', '콘', '브라운', '무지', '라이언', '어피치', '콘', '콘'];
let idx2 = -1;
do {
  idx2 = arr4.indexOf('콘', idx2 + 1);
  arr4[idx2] = '네온';
} while (idx2 >= 0);
console.log(arr4);

// Array.some(함수) => 조건 1건 true/ false
// Array.every(함수) => 조건 모두 true/ false

// let true_false = arr1.some(el => el.length >= 3); //true
let true_false = arr1.every(el => el.length >= 3); // false
console.log(true_false);

// Array.sort();
console.log(arr1.sort()); // 정렬 ['라이언', '무지', '브라운', '어피치', '콘', '펭수'] 가나다라순
console.log(arr1.sort().reverse()); // 반대로 정렬 ['펭수', '콘', '어피치', '브라운', '무지', '라이언']

let arr2 = [3, 4, 21, 10, 1];
arr2.sort((a, b) => {
  // a, b => 0보다 큰 값이 반환. b, a
  // a, b => 0보다 작은 값이 반환. a, b 
  if (a - b > 0) { // a - b => 3 - 4 => -1 .. 0보다 작은 숫자가 되므로 오름차순  [1, 3, 4, 10, 21]
    return 10; // 꼭 10이 아니더라도 됨 0보다 큰값이면 됨.
  } else {
    return -10;
  }
})
console.log(arr2);

//간단하게 내림차순으로 하는 법 [21, 10, 4, 3, 1]
arr2 = [3, 4, 21, 10, 1];
arr2.sort((a, b) => {
  return b - a;
})
console.log(arr2);

//나이순 정렬
let arr3 = [{ name: "현익", age: 10 },
            { name: "헌리", age: 12 }, 
            { name: "에현", age: 8 }];
arr3.sort((e1,e2) => e1.age - e2.age);
console.log(arr3);

//이름순 정렬
arr3 = [{ name: "현익", age: 8 },
        { name: "헌리", age: 10 }, 
        { name: "에현", age: 6 }];
arr3.sort((e1,e2) => {
  if(e1.name < e2.name) {return -1}
  else return 1;
});
console.log(arr3);

let names = "채령, 카렌, 헌익, 헌리, 에현, 개굴, 이랑"

// 공백을 구분자로 배열을 생성하는 split(/,\s+/)
// 가나다 순으로 정렬하는 sort()
// 배열을 문자로 변경하는 join(', ')
let nameAry = names.split(/,\s+/).sort().join(', ');
console.log(nameAry);