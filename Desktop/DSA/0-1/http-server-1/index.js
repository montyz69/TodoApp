const express = require('express');
const bodyParser = require('body-parser');


const port = 3000
const app = express();
app.use(bodyParser.json());

app.get('/',function(req,res){
    console.log(req.body);
    res.send("Hello World")
})

app.get('/asd',function(req,res){
    res.send("Hello World 2")
})

app.post('/a',function(req,res){
    
    res.send("Hello World from post")
})

app.listen(port,()=>{
    console.log(`Hello ${port}`);
})

