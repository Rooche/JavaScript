// ch04/practice2

let str = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque itaque saepe, odit, accusantium perferendis magni dolore quisquam iusto soluta a, iure nostrum quia sit alias harum necessitatibus? Tenetur, labore provident?`;
let strAry = str.split(' ');

// let findWord = prompt('찾을 문자열 입력하세요>> '); // prompt는 검색기능
// let newAry = []; // push();
// for(let word of strAry){
//   console.log(word);

//   if(word.startsWith(findWord)){
//     newAry.push(word);
//   }
// }
// console.log(newAry);

//교수님 에디션
// 찾고자하는 문자로 시작하는 단어 => 새로운 배열 생성
let findWord = prompt('찾을 문자열 입력하세요>> '); // prompt는 검색기능
for(let word of strAry){
  // console.log(word);
  word.startsWith(findWord);
  }
// let newAry = strAry.filter(elem=>elem.startsWith(findWord)); // push();
let newAry = strAry.filter(elem=>elem.indexOf(findWord) != -1); // push();
console.log(newAry);