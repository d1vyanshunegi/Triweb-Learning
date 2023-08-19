//promises
function validate(userName){
    return new Promise((resolve, reject)=>{
        if(userName == "Divyanshu"){
            resolve("Username validated");
        }else{
            reject("Invalid username");
        }
    });
}



validate("Divyanshu")
    .then((result)=>{
        console.log(result);
    })

    .then((res)=>{   //chaining
        console.log("Hi " +res);
    }

    )
    .catch((err)=>{
        console.log(err)
    })

