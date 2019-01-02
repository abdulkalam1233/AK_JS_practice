var count = require('./module1.js');
console.log(module.paths)
console.log(count.v1,count.v2,count.v3,count.h);

//Reading and writing files

const fs = require('fs');

var readData = fs.readFileSync("./text.txt",'utf8');
console.log(readData);

fs.writeFileSync('./new.txt',readData);