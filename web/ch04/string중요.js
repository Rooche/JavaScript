// ch04/string.js

let str1 = '홍길동'; // string(문자열)타입
let str2 = new String('홍길동'); // new라고 하는 키워드로 생성자를 호출하면 object(객체)타입

console.log(str1, str2);
console.log(typeof str1,typeof str2); // 타입비교키워드typeof 를 사용시 string object 라고 출력

//타입을 비교하여 동일한지 아닌지 확인하려면 === 라고 써야함 값만 비교할때는 == 라고 써야함
console.log(str1 === str2); //타입 비교 동일확인 false(string, object라서)
console.log(str1 == str2); //값만 비교 동일확인 true

// 문자열 사이에 있는 공백은 그대로 두되 나머지 밖에 있는 공백은 삭제한다
// 그냥 str1 = ' 홍 길 동 ' 을 출력하면 " 홍 길 동 "이라고 출력되지만
// trim() 을 사용하면 "홍 길 동"으로 출력된다.
str1 = '   홍   길   동   ';
console.log(str1.trim()); // 문자열 좌우 공백 제거

console.clear();
// replace => 찾을 문자열을 대체 문자로 변경.
// split() => 문자열을 매개값을 기준으로 잘라서 배열로 생성.
// join(매개값) => 배열타입을 문자로 변경, 매개값을 구분자로 사용.
// /\s+/ => 정규표현식에서 s는 공백을 의미. +1개 이상을 의미.
// filter() => 배열에서 매개값의 함수의 true값만 새로운 배열.

str1 = '   how   are   youe   to   day  everyone.   ';
str1 = str1.trim(); // 문자열 좌우 공백제거

// /\s+/ => 정규표현식에서 s는 공백을 의미. +1개 이상을 의미.
// /g는 전체탐색
str1 = str1.replace(/\s+/g,' '); //모든 공백 제거, 현재상태는 여러개의 공백을 ' '<- 공백1개 로 바꾸겠습니다 라는 뜻

// split() => 문자열을 매개값을 기준으로 잘라서 배열로 생성.
// str1 = str1.split(' ');  // 문자열과 공백을 잘라서 ''안에 각각 넣음
// str1 = str1.split(' ').filter(elem => elem !='');  // 공백을 제거하고싶으면 filter를 사용함
// str1 = str1.join(' ');
console.log(str1);
console.log(typeof(3.14).toString()); // 숫자만 치면 숫자타입으로 나오지만 toString을 쳐서 타입을 검색하면 string 타입으로 나온다.


// console.log(str1.trim()); // 문자열 좌우 공백 제거
// console.log(str1.replace(/\s/g, '')); // 문자열 공백 전부 제거
// console.log(str1.split(' ').filter(el=>el!='').join(' ')); // 문자열 좌우공백제거하면서 문자열안에 공백은 한칸씩만 있음
// console.log(str1.replace(/\s/g, ' ')); // 문자열안에 공백이 1개씩 남으며 맨 앞과 맨 뒤에 공백이 1개씩만 남음

// ------------ slice 문자열 자르기 --------------
let str3 = 'this is the only one story';
 console.log(str3.slice(8,11)); // 인덱스 8 ~11 문자열만 반환 the만 보임
 console.log(str3.slice(-8,11)); // 시작 인덱스가 음수인 경우 빈 문자열 반환

 console.log(str3.slice(10,4)); // 시작 인덱스가 끝 인덱스보다 크거나 같으면 빈 문자열 반환
 // 파라메터가 1ㅐ만 있을 경우 시작 인덱스 값이됨
 // 끝 인덱스가 생략된 것으로 끝 인덱스는 문자열 길이 값이 사용됨
 console.log(str3.slice(30)); //뭔 개소린지 모르겠음 책에서는 ''을 반환한다고 되어있는데 반환되는 값이 없음
// 끝 인덱스는 마이너스 값을 사용할 수 있음
// 마이너스 값일 경우(문자열 길이 + 마이너스값) 이 끝 인덱스 값이 됨
 console.log(str3.slice(0, -10)); // this is the only
//마지막 인덱스 +1(문자열 길이값)보다 큰 값은 마지막 인덱스+1로 대체
console.log(str1.slice(8,100));


//문자열 찾기. indexOf(), lastIndexOf();
let idx = 'hello, world'.indexOf('w'); // 7번째에 w가 있는데 이유는 문자열 첫번째를 0부터 숫자를 세기때문에
idx = 'hello, world, hel'.lastIndexOf('hel'); // lastIndexOf는 뒤에서부터 찾음
console.log(idx);

// charAt(); 문자를 찾아 출력해줌
let strs = 'hello, world, nice, hel';
idx = strs.indexOf('world') + 'world'.length; 
console.log(strs.substring(idx));

// \d는 숫자타입을 다 검색하겠다는것
// \D는 숫자 아닌것
// \s는 공백
// g는 전체영역
// i는 대소문자 구분 없이
// 만약 (/\s+/g, '$')라고 하면 1개이상의 공백(공백이 100개든 50개든 공백 1개로)을 $로 바꿔주는것이고
// (/\s/g, '$')는 전체영역의 공백 전부를 $로 바꿔줌
// 내가 원하는 만큼의 공백을 없애고싶을때는 (/\s{n}/g, '$')을 해주면된다 n에는 숫자를 넣으면 됨
// ex)(/\s{2}/g, '$') -> 여러개의 공백중 2개짜리 공백을 찾아 $로 바꿔준다
let re = new RegExp();
re = /\d/g;

str = 'nice12 hello13'.replace(/\d/g, '$'); //이 뜻은 숫자타입(\d)을 전체로찾아(g) $로 바꾸겠다는것
str = 'nice12 hello13'.replace(/\D/g, '$'); //이 뜻은 숫자가 아닌 타입(\D)을 전체로찾아(g) $로 바꾸겠다는것
str = 'nice12     hello13'.replace(/\s+/g, '$'); //이 뜻은 공백(\s)을 전체로찾아(g) $로 바꾸겠다는것
console.log(str);

let json = {"name": "hong", "age": 10}
let obj = eval(json);
console.log(obj);


// ---- 특정문자열이 포함 되었는지 알기 ---
str1 = 'good morning, good afternoon, good evening, and good night';
console.log(str1.includes('even')); // true로 나온다 even이 있으니깐
console.log(str1.includes('dawn')); // false로 나온다 dawn이 없으니깐

// ---- 대소문자 구분없이 문자열 위치 찾기 ----
str1 = 'good morning, good afternoon, GOOD EVENING, AND GOOD NIGHT';
//문자열 찾기. indexOf()
// toLowerCase()는 문자열의 영문 대문자를 모두 소문자로 바꿔주며
console.log(str1.toLocaleLowerCase().indexOf('good'));
// toUpperCase()는 문자열의 소문자 알파벳을 모두 대문자로 바꿔줌
console.log(str1.toLocaleUpperCase().indexOf('GOOD')); 