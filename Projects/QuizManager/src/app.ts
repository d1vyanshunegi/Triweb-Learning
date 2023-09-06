import express from 'express';
import mongoose from 'mongoose';

import userRoute from './routes/user';

const app = express();

const connectionString = "mongodb+srv://myuser:abcd1234@cluster0.4nafxpq.mongodb.net/workshopdb?retryWrites=true&w=majority"

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hi!");
});

app.use('/user', userRoute);

mongoose.connect(connectionString)
.then((success) => app.listen(3000))
.catch((err) => console.log(err.message));
