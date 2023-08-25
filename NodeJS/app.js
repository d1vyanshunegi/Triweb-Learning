const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req,res) => {
    //console.log("Requested");
    res.send("Hello");
});

app.post('/add', (req,res) => {
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = n1+n2;
    console.log(req.body);
    res.send(`Sum: ${sum}`);
});

app.listen(3000);