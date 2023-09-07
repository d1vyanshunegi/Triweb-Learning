import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/user';

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{}
}

const registerUser = async (req: Request, res: Response) => {
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
        resp = {status:"error", message:"Something went wrong!", data:{}};
        res.status(500).send(resp);
    }

}

const loginUser = async(req:Request,res:Response) => {
    let resp:ReturnResponse;
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({email});
        
        if(user!==null){
            const status = await bcrypt.compare(password, user.password);
            if(status){
                resp = {status:"success", message:"Logged In!", data:{}};
                res.status(200).send(resp);
            }
            else{
                resp = {status:"error", message:"Credentials mismatch!", data:{}};
                res.status(401).send(resp);
            }
        }
        else{
            resp = {status:"error", message:"User not found!", data:{}};
            res.status(401).send(resp);
        }   
    } catch (error) {
        resp = {status:"error", message:"Something went wrong!", data:{}};
        res.status(500).send(resp);
    }
    

}

const getUser = async(req:Request,res:Response) => {
    let resp:ReturnResponse;
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId,{name:1, email:1});
        if(!user){
            resp = {status:"error", message:"No user found", data:{}};
            res.send(resp);
        }
        else{
            resp = {status:"success", message:"User found!", data:user};
            res.send(resp);
        }
    } catch (error) {
        console.log(error);
        resp = {status:"error", message:"Something went wrong!", data:{}};
        res.status(500).send(resp);
    }
    
}

const updateUser = async(req:Request,res:Response) => {
    let resp:ReturnResponse;
    try {
        const userId = req.body._id;
        const user = await User.findById(userId);
        if(user!==null){
            user.name = req.body.name;
            await user.save();
            resp = {status:"success", message:"User updated!", data:{}};
            res.send(resp);
        }
        
    } catch (error) {
        console.log(error);
        resp = {status:"error", message:"Something went wrong!", data:{}};
        res.status(500).send(resp);
    }
    
}

export { registerUser, getUser, updateUser, loginUser};