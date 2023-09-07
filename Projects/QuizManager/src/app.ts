import express from 'express';
import mongoose from 'mongoose';

import userRoute from './routes/user';

const app = express();

const connectionString =  process.env.CONNECTION_STRING || "";

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hi!");
});

app.use('/user', userRoute);

mongoose.connect(connectionString)
.then((success) => app.listen(process.env.PORT))
.catch((err) => console.log(err.message));
