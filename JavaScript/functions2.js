//closures
function getProductFunction(multiplier){

    return  function (num){
        return multiplier*num;
    }   
}

const double = getProductFunction(2);
let res = double(4);
console.log(res);

const triple = getProductFunction(3);
let res1 = triple(4);
console.log(res1);

const quad = getProductFunction(4);
let res2 = quad(4);
console.log(res2);

//arguments
function addNumbers(){
    let sum = 0;

    let arr = Array.from(arguments);
    arr.forEach(e => {
        sum = sum + e;
    });
    console.log(sum);
}

addNumbers(1,2,3,4,5);
addNumbers(1,2,3);
addNumbers(1,2,3,4,5,6,7,8,9,10);

//rest
function multipleArguments(multiplier,...arg){
    arg.forEach((e)=>{
        console.log(multiplier*e);
    })
}
multipleArguments(2,4,5);//2 is multiplier; 4&5 arguments

//arrow functions
const getSquare = num => num*num;

let sqr = getSquare(4);
console.log(sqr);

//default parameter
const multiply = (num1,num2=2) => {
    console.log(num1*num2);
}