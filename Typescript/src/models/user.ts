const addUserToDB = (userName:string,password:string,age:number) => {
    console.log(userName,password);
    return "User registration done!";
}

interface User {
    id:number,
    uname:string,
    password:string,
    age:number, 
    is_active: true | false,
    accountStatus: string | number
}

const updateUserData = (objUser:User): String =>{
    console.log(objUser.uname)
    return "Update Done!";
}

export {addUserToDB, updateUserData};