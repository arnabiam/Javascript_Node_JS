const fs = require("fs");
const bioData = {
  name: "Arnab",
  age: 26,
  channel: "My youtube Channel",
};
console.log(bioData);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData);

//First convert to JSON
//Then we will add to new file
//readfile
//again convert back
//console.log

const jsonData = JSON.stringify(bioData);
fs.writeFile("jsontxt.txt", jsonData, (err) => {
  console.log("Done");
});
fs.readFile("jsontxt.txt", "utf8", (err, data) => {
  console.log(JSON.parse(data));
  console.log(err);
});
