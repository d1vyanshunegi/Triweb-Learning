import {Request, Response, NextFunction} from 'express';

import User from '../models/user';

const registerUser = (req:Request,res:Response, next:NextFunction) => {
    const user = new User(req.body);
    user.save();
    res.send("Registration done!");
}

export {registerUser};