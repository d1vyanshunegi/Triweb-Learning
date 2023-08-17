//switch case
let weather = 1;

switch(weather){
    case 1:
        console.log("Sunny");
        break;
    case 2:
        console.log("Sunny");
        break;
    case 3:
        console.log("Cloudy");
        break;
    default:
        console.log("Enter a number between 1-3");
        break;
}

//try catch throw finally

function validateUser(name, password){
    try{

        if(name.length < 5){
            throw new Error("User name is too short");
        }
        
        if(password.length < 6){
            throw new Error("Invalid password");
        }
        console.log("working");
      
        return "In try";
        }
        catch(error){
        
            console.log(error);
            return "Fail in catch";
        }finally{
            console.log("Inside finally block");
            return "From finally";
        }
}



let Name = "Divyanshu";
let password = "123456789";
let msg = validateUser(Name, password);
console.log("user ",msg)


