import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import ProjectError from '../helper/error';
import User from '../models/user';

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{} | []
}


const registerUser = async (req: Request, res: Response,next:NextFunction) => {
    let resp:ReturnResponse;
    try {

        const email = req.body.email;
        const name = req.body.name;
        const password = await bcrypt.hash(req.body.password, 12);


        const user = new User({email,name,password});
        const result = await user.save();
        if (!result) {
            resp = {status:"error", message:"No result found", data:{}};
            res.send(resp);
        }
        else{
            resp = {status:"success", message:"Registration done!", data:{userId:result._id}};
            res.send("Registration done!");
        }
    } catch (error) {
        next(error);
    }

}

const loginUser = async(req:Request,res:Response,next:NextFunction) => {
    let resp:ReturnResponse;
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({email});
        
        if(user!==null){
            const status = await bcrypt.compare(password, user.password);
            if(status){

                const token = jwt.sign({userId:user._id}, "secretKey", {expiresIn:'1h'});

                resp = {status:"success", message:"Logged In!", data:{token}};
                res.status(200).send(resp);
            }
            else{
                const err =new ProjectError("Credentials mismatch!");
                err.statusCode = 401;
                throw err;
            }
        }
        else{
            const err =new ProjectError("User not found!");
            err.statusCode = 401;
            throw err;
        }   
    } catch (error) {
        next(error);
    }
    

}


export { registerUser, loginUser};