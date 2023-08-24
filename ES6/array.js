let str = "hiiamhere";
let arr = Array.from(str);
console.log(arr);


function checkData(){
    console.log(arguments);
    let arr = Array.from(arguments);
    console.log(arr);
}
checkData(1,2,3,4,5);


arr = ["a", "b", "c", "d"];

let keys = arr.keys();

console.log(keys);

for(let e of keys){
    console.log(arr[e]);
}


arr = [11,12,13,14,2,56];

let firstOddNumber = arr.find((value, index, ar)=>{
    return value % 2 != 0;
});

function getOdd(value, index, ar){
    return value % 2 != 0;
}

console.log(firstOddNumber);


let indexOfFirstOdd = arr.findIndex((value, index, ar)=>{ 
    return value % 2 != 0;
})

console.log(indexOfFirstOdd);