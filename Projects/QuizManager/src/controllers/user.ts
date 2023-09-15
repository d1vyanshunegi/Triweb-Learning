import { Request, Response, NextFunction } from 'express';

import ProjectError from '../helper/error';
import User from '../models/user';

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{} | []
}

const getUser = async(req:Request,res:Response,next:NextFunction) => {
    let resp:ReturnResponse;
    try {
        const userId = req.params.userId;
        if(req.userId!=req.params.userId){
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 401;
            throw err; 
        }

        const user = await User.findById(userId,{name:1, email:1});
        if(!user){
            const err =new ProjectError("User not found!");
            err.statusCode = 401;
            throw err;
        }
        else{
            resp = {status:"success", message:"User found!", data:user};
            res.status(200).send(resp);
        }
    } catch (error) {
        next(error);
    }
    
}

const updateUser = async(req:Request,res:Response,next:NextFunction) => {
    let resp:ReturnResponse;
    try {
        if(req.userId!=req.body._id){
            const err = new ProjectError("You are not authorized!");
            err.statusCode = 401;
            throw err; 
        }

        const userId = req.body._id;
        const user = await User.findById(userId);

        if(!user){
            const err =new ProjectError("User not found!");
            err.statusCode = 401;
            throw err;
        }
        else{
            user.name = req.body.name;
            await user.save();
            resp = {status:"success", message:"User updated!", data:{}};
            res.send(resp);
        }
        
    } catch (error) {
        next(error);
    }
    
}

export {getUser, updateUser};