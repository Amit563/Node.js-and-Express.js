const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req,res)=>
{
    // res.send("<h1>Welcome to my home page</h1>");
        res.write("<h1>Welcome to my home page</h1>");
        res.write("<h1>Welcome to my home page</h1>");
        res.send();

});

app.get('/about', (req,res)=>
{
    // res.send("Welcome to my about page");
    res.send("Welcome to my about page");
});

app.get('/content', (req,res)=>
{
    // res.send("Welcome to my about page");
    res.status(200).send("Welcome to content page");
});

app.get('/temp', (req,res)=>
{
    // res.send("Welcome to my about page");
    res.send({
        id: 1,
        name: "amit",
    })
});


app.listen(port,()=>
{
  console.log(`listening to the port no ${port}`);
})