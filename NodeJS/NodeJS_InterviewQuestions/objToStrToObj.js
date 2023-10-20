let student = {
    sname:"Divyanshu",
    course:"btech",
    mobile:9999
}

console.log(student);

let strFromObj = JSON.stringify(student);
console.log(strFromObj);

let objFromStr = JSON.parse(strFromObj);
console.log(objFromStr);