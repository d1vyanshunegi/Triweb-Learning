//array destructuring
let arr = [1,2,3,4,5];

const [a0,a1,a2,a3,a4] = arr;
console.log(a0," ",a1," ",a2," ",a3," ",a4);

const [s0,s1] = arr;
console.log(s0," ",s1);

//bitwise operators
let x = 3 & 2;
console.log(x);

let a = 5;
let n = 1;

let isLastBitIs1 = a & n;
if(isLastBitIs1 == 1){
    console.log("Yes");
}else{
    console.log("Not");
}

//ternary operators
let z = x%3==0?x:0;
console.log("using if ",z);

//comma operator
let x1 = (3,4,5,6);
console.log(x);

//in relational operator
let obj = {username:"Divyanshu", mobile:9999};
if('username' in obj){
    console.log(obj.username);
}

//instanceof relational operator; this keyword

function xyz(){
    this.x = 5;
}

let y = new xyz();
console.log(y);

console.log(y instanceof xyz);
console.log(obj instanceof xyz);

