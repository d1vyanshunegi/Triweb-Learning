let student2 = {
    sname: "Divyanshu",
    mobile: 9999
}

let student = {
    sname: "Rohit",
    mobile: 7777,

    getName: function(){
        console.log(this.sname);
    }
}

let sn =  student.getName.bind(student);
setTimeout(sn,1000) 

let st2 = student.getName.bind(student2);
setTimeout(st2,1000);