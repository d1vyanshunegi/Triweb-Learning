let arr =  [1,2,3,4];
let [a,b] = arr;
console.log("First element a: ",a);
console.log("Second element b: ",b);


function getStudent(){
    let student = {
        sname:"Divyanshu",
        age:"20",
        level: "Btech"
    }
    
    return student;
}
    
let {sname, age} = getStudent();
    
console.log(sname, age);

function getData(){
    let obj = {
        ename:"Divyanshu",
        salary: 100000,
        location:{
            city: "Dehradun"
        }
    }
    return obj;
}
    
let {ename: employeeName, salary: employeeSalary, location: {city:employeeCity}} =  getData();
    
console.log("Ename: ", employeeName, ", Salary: ", employeeSalary, ", Location: ",employeeCity);