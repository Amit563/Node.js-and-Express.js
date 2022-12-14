const path = require("path");

const express = require("express");

const app = express();


console.log(__dirname);


// console.log(path.join(__dirname, "../public"));

const staticpath = path.join(__dirname,("../public"));

// builtin middleware

app.use(express.static(staticpath));

// app.use(express.static(staticPath));

app.get("/",(req,res) =>
{
    res.send("hello world from the express");

});
app.get("/about",(req,res) =>
{
    res.send("hello world from the about page");
});

app.listen(8000,() =>
{
    console.log("listening the port at 8000");
});