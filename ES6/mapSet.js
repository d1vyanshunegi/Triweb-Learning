const student1 = {sname: "Divyanshu"};
const student2 = {sname: "Rohit"};

const studentMap = new Map();

studentMap.set("key1", 1);

studentMap.set(student1," He is excellent student");
studentMap.set(student2, " He is good student");

console.log(studentMap);


let newSet = new Set();

newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(4);
newSet.add(1);
newSet.add(4);


console.log(newSet);