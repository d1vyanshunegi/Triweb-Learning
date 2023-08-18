//array to set and set to array
let arr = [1,2,3,3,3,3,3,3,4,4,5]
console.log(arr);

let setFromArray = new Set(arr);
console.log(setFromArray);

let arrFromSetUsingSpreadOperator = [...setFromArray];
arrFromSetUsingSpreadOperator.push(3);
console.log(arrFromSetUsingSpreadOperator);

