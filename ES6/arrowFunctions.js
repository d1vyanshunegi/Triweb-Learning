const hello = () => {
    console.log("Hello!",this);
}

hello();

let arr = [1,2,3,4];

const arrmap = arr.map(element => element * 2);
console.log(arrmap);

const addTwoNumber = (num1, num2) => num1+num2;
console.log(addTwoNumber(5,5)); 

arr.forEach((e)=>{
    console.log(e," ");
})