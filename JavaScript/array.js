//array functions
let arr1 = ['a','b','c','d'];
let arr2 = ['1','2','3','4'];

console.log('Concat');
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log('Join')
let str = arr1.join(' ');
console.log(str);

console.log('Push')
let l = arr1.push('e');
console.log("Return from push",l);
console.log("Array after push",arr1);

console.log('Pop')
let elem = arr1.pop();
console.log("Return from pop",elem);
console.log("Array after pop",arr1);


console.log('Shift')
let elemShift = arr1.shift();
console.log("Return from shift",elemShift);
console.log("Array after shift",arr1);


console.log('Unshift')
let lUnshift = arr1.unshift('a');
console.log("Return from unshift",lUnshift);
console.log("Array after unshift",arr1);

arr3 = arr1.slice(1,4);
console.log(arr3);

let arr = [9,7,8,1,5];
arr.sort();
console.log(arr);

let arrSqr = arr.map((element)=>element * element);
console.log(arrSqr);

let arrFilter = arr.filter((element)=>element%2!=0);
console.log(arrFilter);

let stat = arr.every((e)=> e%2 != 0);
console.log(stat);

stat = arr.some((e)=>e%2==0);
console.log(stat);

let total = arr.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue 
},0)
console.log(total);