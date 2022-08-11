const espress = require("express");

const app = espress();
const port = 3000;

app.get("/",(req,res)=>
{
    // res.send("<h1>welcome to my home page<h1>");
    res.write("<h1>welcome to my home page<h1>");
    res.write("<h1>welcome to my home page<h1>");
    res.send();
});

app.get("/about",(req,res)=>
{
    res.send("welcome to my about page");
});

app.get("/contact",(req,res)=>
{
    res.send("welcome to my contact apge");
});

app.get("/temp",(req,res)=>
{
    // res.send("welcome my temp page");
    // res.send([
    res.json([
        {
        id:1,
        name: "Amit",
        },
        {
        id:2,
        name: "Amit",
        },
        {
        id:3,
        name: "Amit",
        }
       ])
});

app.listen(port,()=>
{
    console.log(`listening to the port no ${port}`);
});
