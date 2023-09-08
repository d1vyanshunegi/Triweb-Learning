import express from 'express';
import mongoose from 'mongoose';

import userRoute from './routes/user';
import authRoute from './routes/auth';

const app = express();

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

mongoose.connect(connectionString)
.then((success) => {
    app.listen(process.env.PORT);
    console.log("Server Connected!")
})
.catch((err) => console.log(err.message));
