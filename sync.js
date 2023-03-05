const fs = require("fs");

// fs.writeFile("read.txt", "Today is awesome day", (err) => {
//   console.log("File is created");
//   console.log(err);
// });

// fs.appendFile("read.txt", " Tommoroow will be a great day", (err) => {
//   console.log("Appended Successfully");
//   console.log(err);
// });

// fs.readFile("read.txt", "UTF-8", (err, data) => {
//   console.log(data);
// });
// console.log("Hey You");

//Synchronous

const data = fs.readFileSync("read.txt", "UTF-8");
console.log(data);
console.log("Hey You");
