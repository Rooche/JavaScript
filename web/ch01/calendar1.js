// calendar.js

// Sun Mon Tue Wed Thr Fri Sat
//  1   2   3   4   5   6   7
//  8   9   10  11  12  13  14
//  15  16  17  18  19  20  21
//  22  23  24  25  26  27  28
//  29  30  31

let tableTag = '<table border=1>';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

tableTag +='<tr>';
for(let day of days){
  tableTag +='<th>' + day + '</th>';
}
tableTag += '</tr><tr>';

for(let day = 1; day <= 31; day++){
  tableTag +='<td>' + day + '</td>'
  if(day%7 ==0){
    tableTag += '</tr><tr>';
  }
}
tableTag += '</tr></table>';

document.write(tableTag);