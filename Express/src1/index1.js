const express = require("express");

const path = require("path")
const app = express();
const hbs = require("hbs");
const port = 8000;

// built in middleware

/*console.log(__dirname);
console.log(path.join());

console.log(path.join(__dirname,'../public1'));
*/

const staticPath = path.join(__dirname,'../public1');
const templatePath = path.join(__dirname, "../templates");
const partialPath = path.join(__dirname, "../templates/partials");


// to set the view engine


app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath)

// app.use(express.static(staticPath));



app.get(" /", (req,res) =>
{
    res.render("index");
})    





app.get("/",(req,res)=>{
    res.send("hello for the express  server");
})

app.listen(port,()=>
{
    console.log(`listening to the port ${port} `);
})
