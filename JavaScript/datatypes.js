//Datatypes and conversion, literals

let nullVariable = null;
let undefinedVariable;
let numVar = 12;
let str = "Hello There!";
let obj = {};

console.log("null", nullVariable, " ", typeof(nullVariable));
console.log("undefinedVariable", undefinedVariable, " ", typeof(undefinedVariable));
console.log("numVar", numVar, " ", typeof(numVar));
console.log("str", str, " ", typeof(str));
console.log("obj", obj, " ", typeof(obj));

let n1 = 1;
let n2 = '2';
console.log(n1+n2); 
let n3 = '4';
let n4 = 7;
console.log(parseInt(n3)+n4); 

console.log(0o54);
console.log(0b101);
console.log(0x1A5);
