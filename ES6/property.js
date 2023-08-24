let name = "Divyanshu";
let age = 20;

let student = {
    name,
    age,
}
console.log(student);

let key = "new_key"

function ret(){
    return "Somemorevalues";
}

let obj = {
    sname: "Divyanshu",
    [key + 2 +  ret()] : "Yes"
}

console.log(obj);

var obj1 = {
    count : 10,
    doSomethingLater : function(){
        setTimeout( () => {
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

count = 1
obj1.doSomethingLater();