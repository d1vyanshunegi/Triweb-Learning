console.log(Math.trunc(5.7));

console.log(Math.sign(-19));
console.log(Math.sign(20));
console.log(Math.sign(0));

console.log(Math.cbrt(64));

console.log(Math.log2(2));
console.log(Math.log10(10));

let x = Number.EPSILON;
console.log(x);

let y = Number.MAX_SAFE_INTEGER;
console.log(y);

let z = Number.MIN_SAFE_INTEGER;
console.log(z);


let a = 123;
let b = 9007199254740992
console.log(Number.isInteger(b));

console.log("Safe integer",Number.isSafeInteger(b));