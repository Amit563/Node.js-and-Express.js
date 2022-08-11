const fs = require("fs");
const { readFile } = require("fs/promises");

fs.writeFile("read.txt","Today is awesome day: ",(err)=>
{
    console.log("files is created");
    console.log(err);
  });fs.appendFile("read.txt","as well as night is also better",(err)=>
  {
      console.log("task completed");
  });

  fs.readFile ("read.txt","utf-8",(err,data)=>
  {
      console.log(data);
  });

  