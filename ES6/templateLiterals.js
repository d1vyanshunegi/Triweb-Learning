function printData(sname, age){
    let toPrint = `Student's name is ${sname} 
and age is ${age}`;
    console.log(toPrint);
}

let sname = "Divyanshu";
let age = 20;
printData(sname, age);

function something(string, name, age){
    console.log("STRING", string)
    console.log("NAME", name)
    console.log("AGE", age)
}

sname = "Rohit";
age = 20;
something`Student's name is ${sname} and age is ${age}`;

console.log(String.raw`age is \n ${40}` == "age is \\n 40")

console.log(0b111110111 === 503)  //binary
console.log(0o767 === 503)  //octal


let num = parseInt('0111110111', 2);
console.log(num == 503)