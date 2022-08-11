const os =require("os");

console.log(os.arch());

const freememory = os.freemem();

console.log("Host Name:",os.hostname());

// console.log(freememory);
console.log("Free RAM space:",`${freememory/1024/1024/1024}`);

const totalmemory = os.totalmem();
console.log("Totol RAM capacity:",`${totalmemory/1024/1024/1024}`);

console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());