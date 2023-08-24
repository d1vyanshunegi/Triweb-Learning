const student1 = {sname: "Divyanshu"};
const student2 = {sname: "Rohit"};

const studentMap = new Map();

studentMap.set("key1", 1);

studentMap.set(student1," He is excellent student");
studentMap.set(student2, " He is good student");

console.log(studentMap);