const add = (num1, num2) => {
    return num1+num2;
}

const addHi = uname => {
    return "Hi " + uname;
}

const addHello = uname => "Hello "+uname


const result = add(2,3);
console.log("Result = ",result);

const hiname = addHi("Divyanshu");
console.log(hiname);

const helloName = addHello("Akshay");
console.log(helloName);


const isThis = () =>{

    console.log(this);
}

console.log(this);
isThis();