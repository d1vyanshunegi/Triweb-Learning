import express from 'express';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import ProjectError from './helper/error';
import userRoute from './routes/user';
import authRoute from './routes/auth';

const app = express();

interface ReturnResponse{
    status:"success" | "error",
    message:String,
    data:{} | []
}

const connectionString =  process.env.CONNECTION_STRING || "";

app.use(express.json());

declare global{
    namespace Express{
        interface Request{
            userId:String;
        }
    }
}

app.get('/', (req,res) => {
    res.send("Hi!");
});

app.use('/user', userRoute);

app.use('/auth', authRoute);



app.use((err:ProjectError, req:Request, res:Response, next:NextFunction) => {
    let message:String;
    let statusCode:number;

    if(!!err.statusCode && err.statusCode < 500){
        message = err.message;
        statusCode = err.statusCode;
    }
    else{
        message = "Something went wrong. Try again after sometime.";
        statusCode = 500;
    }

    let resp:ReturnResponse = {status:"error", message, data:{}};

    if(!!err.data){
        resp.data = err.data;
    }

    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
})


mongoose.connect(connectionString)
.then((success) => {
    app.listen(process.env.PORT);
    console.log("Server Connected!")
})
.catch((err) => console.log(err.message));
