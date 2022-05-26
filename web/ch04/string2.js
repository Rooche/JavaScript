// ch04/string2.js
let today = new Date();
console.log(today.toDateString()); // Thu May 26 2022
console.log(today.toISOString()); // 2022-05-26T07:21:43.314Z

Date.prototype.customFormat = function(){
  let yyyy = this.getFullYear(); // 년도를 가지고있는 fullyear
  let mm = this.getMonth() + 1; // 월을 들고오는데 0 ~ 11까지 보여줘서 +1을 해서 1 ~ 12로 바꾼다
  let dd = this.getDate();
  let hh = this.getHours();
  let mi = this.getMinutes();
  let ss = this.getSeconds();

  // return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
  return `${yyyy}-${('0' +mm).slice(-2)}-${dd} ${hh}:${mi}:${('0'+ss).slice(-2)}`; //string에서 +는 두 문자를 컴팩튼지 뭔지
}
console.log(today.customFormat()); // return값으로 인해 2022-5-26 16:27:24

setInterval(function(){
  let today = new Date();
  console.log(today.customFormat());
  // document.write(today.customFormat());
}, 1*1000); // 매개값을 2개 받음 
