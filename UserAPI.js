const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>
{
    if(req.url == "/")
    {
        res.end("hello from the home sides");
    }
    else if (req.url == "/about")
    {
        res.end("hello form the aboutUs sides");
    }
    else if (req.url == "/contact")
    {
        res.end("hello form the contactUs sides");
    }
    else if (req.url == "/userAPI")
    {
        fs.readFile(`${__dirname}/read.txt`,"utf-8",(err,data)=>
        {
            console.log(data);
            // const objdata = JSON.parse(data);
            // res.end(objdata[0].name);
            res.end(data);
        });
    }
    else
    {
        // res.writeHead(404);
        res.writeHead(404  , {"Content-type": "text/html"});
        res.end("<h1> 404 error pages. page doesnot exist</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>
{
    console.log("listening to the port no 8000");
});