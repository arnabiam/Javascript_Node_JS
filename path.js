const path = require("path");
console.log(path.dirname("F:/Thapa_NodeJS/path.js"));
console.log(path.extname("F:/Thapa_NodeJS/path.js"));
console.log(path.basename("F:/Thapa_NodeJS/path.js"));

console.log(path.parse("F:/Thapa_NodeJS/path.js"));

const mypath = path.parse("F:/Thapa_NodeJS/path.js");
console.log(mypath.base);
