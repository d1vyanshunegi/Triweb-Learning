//Math functions
console.log(Math.PI);

let max = Math.max(1,2,3,4,5);
let min = Math.min(1,2,3,4,5);
console.log('max',max);
console.log('min',min);


let ran = Math.floor(Math.random()*10,1);
console.log("one digit",ran);


let n1 = 100000;
let n2 = n1.toExponential();

console.log(n2);

let n3 = Number(1.7925).toFixed(2);
console.log(n3);

//Date functions
let dateObj = new Date(date);

console.log("Month",dateObj.getMonth());
console.log("FullYear",dateObj.getFullYear());
console.log("Date",dateObj.getDate());
console.log("time",dateObj.getTime());
console.log("hour",dateObj.getHours());

