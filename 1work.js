const fs = require("fs");
fs.writeFileSync("read.txt","feroze gandhi institute of technology");

fs.renameSync("read.txt","Read.txt");

fs.appendFileSync("read.txt"," Raebareli");

const buf_data = fs.readFileSync("Read.txt");
console.log(buf_data);

const org_data = buf_data.toString();
console.log(org_data);

fs.mkdirSync("fsAsync");