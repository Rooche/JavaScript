// ch02/mock_data.js

let data = `[{"id":1,"first_name":"Gaylord","last_name":"Gergely","email":"ggergely0@histats.com","gender":"Male","salary":88},
{"id":2,"first_name":"Clarinda","last_name":"Cowmeadow","email":"ccowmeadow1@princeton.edu","gender":"Female","salary":90},
{"id":3,"first_name":"Nadean","last_name":"Schleicher","email":"nschleicher2@moonfruit.com","gender":"Female","salary":79},
{"id":4,"first_name":"Justino","last_name":"Duncan","email":"jduncan3@cbslocal.com","gender":"Male","salary":61},
{"id":5,"first_name":"Raimundo","last_name":"Vaux","email":"rvaux4@com.com","gender":"Male","salary":93},
{"id":6,"first_name":"Trstram","last_name":"Veeler","email":"tveeler5@disqus.com","gender":"Male","salary":65},
{"id":7,"first_name":"Jaymee","last_name":"Espine","email":"jespine6@google.pl","gender":"Female","salary":81},
{"id":8,"first_name":"Shawn","last_name":"Seebert","email":"sseebert7@usgs.gov","gender":"Polygender","salary":99},
{"id":9,"first_name":"Eldon","last_name":"Mc Menamin","email":"emcmenamin8@blogs.com","gender":"Male","salary":83},
{"id":10,"first_name":"Theresita","last_name":"Shorrock","email":"tshorrock9@google.nl","gender":"Female","salary":62}]`;

data = JSON.parse(data); //JSON형태의 데이터 => 오브젝트타입으로 변형
console.log(data);

console.clear();
//salary 확인
let over80 = data.filter((val, idx) => {
  console.log(val);
  return val.salary >= 80; // salary가 80이상인것들을 구한다
});
console.log(over80);

//성별(현재는 여성) 확인
let females = data.filter(obj => obj.gender == 'Female'); // gender가 Female인 사람을 구한다
console.log(females);

//index에 function1과 mock_data를 사용하여 테이블생성과 동시에 위에 있는 data(이름성별 등등)을 바로 테이블에 넣음
let str = createTable(over80);
document.write(str);