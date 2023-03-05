const fs = require("fs");
// fs.writeFileSync("mybio.txt", "Your First Name is Arnab");
// fs.appendFileSync("mybio.txt", "Your Last Name is Sarkar");
// const buff_data = fs.readFileSync("mybio.txt");
// console.log(buff_data);
// const readableData = buff_data.toString();
// console.log(readableData);
// fs.renameSync("mybio.txt", "bio.txt");
fs.unlinkSync("bio.txt");
