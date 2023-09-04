import { Request,Response } from 'express';
import {addUserToDB} from '../models/user';

const registerUser = (req:Request,res:Response) => {

    const userName = "Divyanshu";
    const password = "Password";

    const result = addUserToDB(userName,password);

    res.send("User registration!");
    console.log(result);
}

export {registerUser};