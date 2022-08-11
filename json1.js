const fs = require("fs");

const biodata=
{
    name:"amit",
    age:18,
    channel:"technical",
};
// const json = JSON.stringify(biodata);
// console.log(json);

// const objdata = JSON.parse(json);
// console.log(objdata);
const jsondata = JSON.stringify(biodata);
// fs.writeFile("json2.json",jsondata,(err)=>
// {
//     console.log("done");
// });

fs.readFile("json2.json","utf-8",(err,data)=>
{
    const orgdata = JSON.parse(data);
    console.log(data);
    console.log(orgdata);
})

