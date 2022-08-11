const express = require ("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

// public static path
// console.log(path.join(__dirname,"../public"));

const static_path=path.join(__dirname,"../public");


app.use(express.static(static_path))

app.get("",(req,res)=>
{
    res.send("Welcome to the Gautam techinal shop");
})

app.get("/about",(req,res)=>
{
    res.send("Welcome to the Gautam techinal about");
})

app.get("/weather",(req,res)=>
{
    res.send("Welcome to the Gautam techinal weather");
})

app.get("*",(req,res)=>
{
    res.send("404 error page oops ");
})


app.listen(port,()=>
{
    console.log(`listening to the part at ${port}`);
});