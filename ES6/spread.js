let arr1 = [1,2,3,4,5,6,7,8];
let arr2 = [9,10];
let combined = [...arr1, ...arr2];
console.log(combined);

let objStudent = {name:"Divyanshu", age:20};

let objStudent1 = {...objStudent, city: "Dehradun"};

console.log("objStudent: ",objStudent);
console.log("objStudent1: ",objStudent1);

objStudent1.name = "Rohit";
console.log("After Update objStudent1: ",objStudent1);
console.log("Again printing objStudent: ",objStudent);