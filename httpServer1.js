const http = require("http");

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
    else
    {
        // res.writeHead(404);
        res.writeHead(404  , {"Content-type": "text/html"});
        res.end("404 error pages. page doesnot exist");
    }
});

server.listen(8000,"127.0.0.1",()=>
{
    console.log("listening to the port no 8000");
});