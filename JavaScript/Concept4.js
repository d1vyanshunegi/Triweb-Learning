//Nested for loop with continue and break

let n = 5;

for(    let i=1;    i<=n;   i++){
    for(    let j=1;    j<=n;   j++){
        if(j == 3){

            continue;  //skips 3
        }

        console.log(i,j);
    }
    if(i == 3){
        break;   //runs until 3
    }
}


objStudent = {
    Name:"Divyanshu",
    Roll:29
}

for (const key in objStudent) {  //for in loop

   console.log(`${key} of Student is ${objStudent[key]}`); 
}

const arr = [1,2,3,4,5];

for (let e of arr) {  //for of loop
    console.log(e);
}

arr.forEach((e)=>{ //for each loop
    console.log(e);
});