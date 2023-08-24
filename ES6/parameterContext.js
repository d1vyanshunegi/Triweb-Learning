function printDataType1([name, age]){
    console.log("Name is ", name);
    console.log("Age is",age);
}
    
printDataType1(["Divyanshu", 20]);

function printDataType2({name, age}){
    console.log("Name is ", name);
    console.log("Age is",age);
}
printDataType2({name:"Divyanshu", age:20});


function printDataType3({name: ename, age: eage}){
    console.log("Name is ", ename);
    console.log("Age is ", eage);
}

printDataType3({name:"Divyanshu", age:20})