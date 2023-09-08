import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const isAuthenticated = (req:Request,res:Response,next:NextFunction) => {
    let isUserAuthenticated = false;

    const authHeader = req.get("Authorization");

    if(!authHeader){
        const err =  new Error("Not authenticated!");
        throw err;
        //res.status(401).send();
    }

    const token = authHeader.split(' ')[1];

    let decodedToken:{userId:String, iat:Number, exp:Number};
    try {
        decodedToken = <any>jwt.verify(token, 'secretKey');
    } catch (error) {
        const err =  new Error("Not authenticated!");
        throw err;
    }

    if(!decodedToken){
        const err =  new Error("Not authenticated!");
        throw err;
    }

    req.userId = decodedToken.userId;

    next();

    
}

export {isAuthenticated};