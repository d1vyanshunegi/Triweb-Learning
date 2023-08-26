const express = require('express');
const calculatorRouter = require('./routers/calculator');

const app = express();
app.use(express.json());


app.get('/', (req,res) => {
    //console.log("Requested");
    res.send("Hey");
});

app.use('/calculator',calculatorRouter);


app.listen(3000);