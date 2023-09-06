import {Request, Response, NextFunction} from 'express';

const registerUser = (req:Request,res:Response, next:NextFunction) => {
    console.log("Registration done!");
    console.log(req.body);
    res.send("Registration done!");
}

export {registerUser};