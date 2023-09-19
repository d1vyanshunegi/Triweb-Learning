const express = require('express');
const app =express();
const cors = require('cors');
const mongoose = require('mongoose');
const Product = require('./models/product');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("running")
});

app.post('/product', async (req,res)=>{
    try {
        const result = await Product.create(req.body);
        res.send({status:'success'});
    } catch (error) {
        console.log(error.message);
        res.send({status:'error', message:error.message})
    }
});

mongoose
    .connect(process.env.connectionString)
    .then(success=> app.listen(3004))
    .catch(err=>console.log(err.message));

