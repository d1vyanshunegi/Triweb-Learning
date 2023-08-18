let newMap = new Map()
newMap.set("name","Divyanshu")

console.log(newMap);

newMap.set("address","Dehradun");
console.log(newMap);

newMap.set("mobile",999999)
console.log(newMap);

console.log("Number of Element in Map = ",newMap.size);

const studentName = newMap.get('name');
console.log("Name from Map is ",studentName);

newMap.set(1,"One");
console.log(newMap);

let valOf1 = newMap.get(1);
console.log("Val of 1 is ",valOf1);

//weakmap
let wMap = new WeakMap()
obj1 = {}
obj2 = {1:1}
obj3 = {2:2}
wMap.set(obj1,"val1")
wMap.set(obj2,"val2")
wMap.set(obj3,"val3")

console.log(wMap);
let v1 = wMap.get(obj2);
console.log(v1)