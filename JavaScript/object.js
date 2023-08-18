//object
function employee(name, designation, salary, age) {
    this.name = name;
    this.designation = designation;
    this.payment = salary;
    this.age = age;
}

let obj1 = new employee("Divyanshu","Intern",0,21);
console.log(obj1);

//__proto__ 
console.log(obj1.__proto__);

obj1.__proto__.display = function(){
    console.log(`${this.name} works as ${this.designation}`);
}
obj1.display();

//prototype
console.log(employee.prototype);

let obj = {
    name:"Divyanshu",
    age:30,
    get getAge(){  //getter
        return this.age;
    },
    set setAge(newAge){  //setter
        this.age=newAge
    }
}

console.log(obj);
obj.setAge = 20;
console.log(obj.getAge);

delete obj.name;  //delete
console.log(obj);